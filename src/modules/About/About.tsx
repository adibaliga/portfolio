import bannerMan from "../../assets/banner-man.svg";
import CustomButton from "../../components/button/CustomButton";

const About: React.FC = () => {
  return (
    <section className="py-16 bg-white h-[800px] mx-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 md:pr-8 h-full">
          <div className="w-[600px] flex flex-col h-full justify-end">
            <div className="h-4/5 flex flex-col justify-end">
              <h2
                className="text-5xl font-normal mb-4"
                style={{ lineHeight: "1.5" }}
              >
                Hello I'am
                <strong className="font-extrabold text-5xl">{/*
                   */}Adithya Baliga
                </strong>
                <div />
                <strong className="font-extrabold text-5xl">Frontend </strong>
                <strong className="font-extrabold text-5xl text-stroke">
                  Developer
                </strong>
                <div />
                Based In{" "}
                <strong className="font-extrabold text-5xl">India.</strong>
              </h2>
              <p
                className="font-normal text-base mb-4 text-zinc-500"
                style={{ lineHeight: "1.5" }}
              >
                I'm Adithya Baliga B, Senior Software Developer specializing in
                React.js and JavaScript, with 5+ years of experience. Passionate
                about creating intuitive user interfaces and leveraging AI for
                innovative solutions. Skilled in TypeScript, React Native, and
                web development.
              </p>
            </div>
            <div className="h-1/5 flex justify-start items-end space-x-4">
              <CustomButton
                icon="linkedin"
                size="medium"
                onClick={() => console.log("clicked")}
              />
              <CustomButton
                icon="github"
                size="medium"
                onClick={() => console.log("clicked")}
              />
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center h-[95%]">
          <img src={bannerMan} alt="Banner Man" className="w-full h-full " />
          <hr
            className="w-full border-[3px] -mt-1.5 border-black"
            style={{ backgroundColor: "#000000" }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
