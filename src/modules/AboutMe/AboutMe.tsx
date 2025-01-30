import boyImage from "../../assets/boy.svg";
const AboutMe = () => {
  return (
    <section id="about-me" className="w-fulle py-16">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Illustration Container */}
          <div className="aspect-square bg-white rounded-lg p-8">
            <img
              src={boyImage}
              alt="Boy Illustration"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Content Container */}
          <div className="space-y-6 p-8 pt-9">
            <h2 className="text-5xl font-normal text-primary-black py-6">
              About <strong className="text text-primary-black">Me</strong>
            </h2>
            <div className="space-y-6 text-base font-normal text-zinc-500">
              <p className="leading-relaxed">
                I'm a passionate, self-organized designer with specialties in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clean, readable, highly performant code matters to
                me.
              </p>
              <p className="leading-relaxed">
                I started my journey as a web developer in 2016, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, I spent after learning my web
                development journey with Html5, Css3, JavaScript and Jquery and
                I'm skilled in React.js, Next.js, Node.js, TypeScript, Redux,
                PostgreSQL, Sequelize and much more.
              </p>
              <p className="leading-relaxed">
                When I'm not in front of a computer screen, you can find me
                hosting local meetups, hiking with friends, or crossing off
                another item on my bucket list. Whether I'm attending tech
                conferences or simply enjoying coffee on my own, you can follow
                me on Twitter where I share tech-related tips and build in
                public so you can follow me as I grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
