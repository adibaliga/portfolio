// Import images
import project1Image from "../../assets/project1.jpeg";
const projects = [
  {
    id: "01",
    title: "Crypto Screener Application",
    image: project1Image,
    description:
      "I'm baby PBR&B YOLO twee activated charcoal DIY tousled biodiesel dreamcatcher wolf vaporware vinyl vegan. Direct trade asymmetrical drinking vinegar bicycle rights locavore pour-over coloring book meditation.",
    isReverse: false,
  },
  {
    id: "02",
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    image: project1Image,
    description:
      "I'm baby PBR&B YOLO twee activated charcoal DIY tousled biodiesel dreamcatcher wolf vaporware vinyl vegan. Direct trade asymmetrical drinking vinegar bicycle rights locavore pour-over coloring book meditation.",
    isReverse: true,
  },
  {
    id: "03",
    title: "Blog Website Template",
    image: project1Image,
    description:
      "I'm baby PBR&B YOLO twee activated charcoal DIY tousled biodiesel dreamcatcher wolf vaporware vinyl vegan. Direct trade asymmetrical drinking vinegar bicycle rights locavore pour-over coloring book meditation.",
    isReverse: false,
  },
];
const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full py-16 bg-primary-black">
      <div className="container mx-auto px-12 ">
        <h2 className="text-5xl font-normal my-8 text-primary-white text-center">
          My <span className="font-extrabold">Projects</span>
        </h2>
        <div className="space-y-30 my-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div
                className={`p-8 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-lg"
                />
              </div>
              <div
                className={`flex flex-col p-8 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <span className="text-5xl text-white font-extrabold mb-4">
                  {project.id}
                </span>
                <h2 className="text-[32px] text-white font-bold mb-4">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-6">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
