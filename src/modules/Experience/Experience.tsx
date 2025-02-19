import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    id: 1,
    title: "Lead Software Engineer",
    company: "Google",
    dateRange: "Nov 2019 - Present",
    description:
      "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
  },
  {
    id: 2,
    title: "Lead Software Engineer",
    company: "Google",
    dateRange: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
  },
  {
    id: 3,
    title: "Lead Software Engineer",
    company: "Google",
    dateRange: "Jan 2016 - Dec 2017",
    description:
      "During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="w-full py-16 bg-primary-black">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-normal my-8 text-primary-white">
          My <span className="font-extrabold">Experience</span>
        </h2>
        <div className="space-y-12 my-24 mx-16">
          {experiences.map(({ id, title, company, dateRange, description }) => (
            <ExperienceCard
              key={id}
              title={title}
              company={company}
              dateRange={dateRange}
              description={description}
              className={
                id % 2 === 0
                  ? "bg-primary-black border-zinc-500 border"
                  : "bg-zinc-800"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
