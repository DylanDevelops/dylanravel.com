const About = () => {
  return (
    <section id="about" className="flex flex-col gap-2 scroll-mt-10">
      <h2 className="text-white font-bold text-2xl">About Me</h2>
      <div className="text-white/80 space-y-4">
        <p>
          Originally from Denver, Colorado, I'm an undergraduate at Chapman University, where my passions for technology
          and storytelling converge. My lifelong love for video games was the spark that led me to pursue a major in
          Computer Science with a minor in Game Development Programming, allowing me to build the immersive, interactive
          worlds I grew up exploring.
        </p>
        <p>
          Beyond my academic pursuits, I am driven to use technology for good. As an Undergraduate Research Assistant, I
          am privileged to build tools that create equitable and accessible technological access for blind and visually
          impaired students. This work, combined with my project management, website development, and graphic design
          skills, allows me to approach challenges with a well-rounded and human-centered perspective.
        </p>
        <p>
          I'm probably snowboarding, hiking, or indulging my creative side through screenwriting and acting when not in
          front of a computer. At the end of the day, I enjoy a good card game with friends or playing with my cat,
          Yonder.
        </p>
      </div>
    </section>
  );
};

export default About;
