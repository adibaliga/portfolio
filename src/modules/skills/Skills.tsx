import reactIcon from "../../assets/react.svg";
import javascriptIcon from "../../assets/javascript.svg";
import typescriptIcon from "../../assets/typescript.svg";
import cssIcon from "../../assets/css.svg";
import htmlIcon from "../../assets/html.svg";
import nextjsIcon from "../../assets/nextjs.svg";
import reduxIcon from "../../assets/redux.svg";
import nodejsIcon from "../../assets/nodejs.svg";
import gitIcon from "../../assets/git.svg";

const skills = [
  { name: "React", icon: reactIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: typescriptIcon },
  { name: "CSS", icon: cssIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "Next JS", icon: nextjsIcon },
  { name: "Redux", icon: reduxIcon },
  { name: "Node.js", icon: nodejsIcon },
  { name: "React Native", icon: reactIcon },
  { name: "Git", icon: gitIcon },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 mx-16">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-normal my-8">
          My <span className="font-extrabold">Skills</span>
        </h2>
        <div className="grid grid-cols-2 my-20 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-2 border-black rounded-lg p-8 flex flex-col items-center justify-center h-52 w-52"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mb-6"
              />
              <h5 className="text-xl font-bold font-sora">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
