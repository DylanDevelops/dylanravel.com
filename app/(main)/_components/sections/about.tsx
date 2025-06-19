const About = () => {
  return (
    <section id="about" className="flex flex-col gap-2 scroll-mt-10">
      <h2 className="text-white font-bold text-2xl">About Me</h2>
      <div className="text-white/80 space-y-4">
        <p>
          I am originally from Denver, Colorado, and currently an undergraduate at Chapman University. My passions for
          technology and storytelling come together in my studies.
        </p>
        <p>
          A lifelong love for video games inspired me to pursue a major in Computer Science and a minor in Game
          Development Programming. This allows me to build the immersive worlds I grew up exploring and use technology
          for good. As an Undergraduate Research Assistant, I am privileged to develop tools for equitable and
          accessible technological access for blind and visually impaired students.
        </p>
        <p>
          When I'm not coding, I'm probably snowboarding, hiking, or indulging my creative side through screenwriting
          and acting. I enjoy playing a good card game with friends or spending time with my cat, Yonder.
        </p>
      </div>
    </section>
  );
};

export default About;
