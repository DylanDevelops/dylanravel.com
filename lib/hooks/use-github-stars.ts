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

    const match = githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
    if (!match) {
      setError("Invalid GitHub URL");
      return;
    }

    const [, owner, repo] = match;
    const cacheKey = `github-stars-${owner}-${repo}`;

    // check cache with 24 hour expiration
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
      try {
        const { stars: cachedStars, timestamp } = JSON.parse(cached);
        const isExpired = Date.now() - timestamp > 24 * 60 * 60 * 1000;

        if (!isExpired) {
          setStars(cachedStars);
          return;
        }
      } catch (e) {
        // cache broken, keep fetching
      }
    }

    setLoading(true);
    fetch(`https://api.github.com/repos/${owner}/${repo}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const starCount = data.stargazers_count || 0;
        setStars(starCount);

        localStorage.setItem(cacheKey, JSON.stringify({ stars: starCount, timestamp: Date.now() }));

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [githubUrl, shouldFetch]);

  return { stars, loading, error };
};
