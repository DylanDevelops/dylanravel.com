import { useEffect, useState } from "react";

/**
 * Custom hook to fetch GitHub repository star count.
 *
 * @param githubUrl - The GitHub repository URL
 * @param shouldFetch - Whether to fetch the star count
 * @returns Object containing stars count, loading state, and error state
 */
export const useGitHubStars = (githubUrl?: string, shouldFetch: boolean = false) => {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!githubUrl || !shouldFetch) {
      return;
    }

    const fetchStars = async () => {
      const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!match) {
        setError("Invalid GitHub URL");
        return;
      }

      const [, owner, repo] = match;
      const cacheKey = `github-stars-${owner}-${repo}`;

      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        try {
          const { stars: cachedStars, timestamp } = JSON.parse(cached);
          const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000;
          if (!isExpired) {
            setStars(cachedStars);
            return;
          }
        } catch {
          // cache broken, keep fetching
        }
      }

      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const data = await res.json();
        const starCount = data.stargazers_count || 0;
        setStars(starCount);
        localStorage.setItem(cacheKey, JSON.stringify({ stars: starCount, timestamp: Date.now() }));
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStars();
  }, [githubUrl, shouldFetch]);

  return { stars, loading, error };
};
