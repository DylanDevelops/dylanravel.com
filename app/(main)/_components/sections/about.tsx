import { PortfolioConstants } from "@/lib/branding";

const About = () => {
  return (
    <section id="about" className="flex scroll-mt-10 flex-col gap-2">
      <h2 className="text-2xl font-bold text-white">About Me</h2>
      <div className="space-y-4 text-white/80">
        <p>
          I am originally from Denver, Colorado, and currently an undergraduate at Chapman University. My passions for
          technology and storytelling come together in my studies.
        </p>
        <p>
          My lifelong love for video games inspired me to pursue Computer Science and Game Development Programming. This
          passion led me to found {PortfolioConstants.Company.LegalName}, where I'm building innovative solutions at the
          intersection of technology and creativity.
        </p>
        <p>
          I also work as an Undergraduate Research Assistant, developing tools for equitable and accessible technology
          access for blind and visually impaired students.
        </p>
        <p>When I'm not coding, I enjoy snowboarding, hiking, screenwriting, and spending time with my cat, Yonder.</p>
      </div>
    </section>
  );
};

export default About;
