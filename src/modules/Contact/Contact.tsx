import { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
import CustomTextarea from "../../components/textarea/CustomTextArea";
import CustomButton from "../../components/button/CustomButton";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [textData, setTextData] = useState("");
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <CustomInput
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              type="email"
              placeholder="Your website (if exists)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <CustomTextarea
              placeholder="How can I help?*"
              value={textData}
              onChange={(e) => setTextData(e.target.value)}
            />

            <div className="flex items-center gap-4">
              <CustomButton text="Get in Touch" onClick={() => {}} />

              <div className="flex items-center gap-4">
                <CustomButton icon="facebook" onClick={() => {}} />
                <CustomButton icon="github" type="active" onClick={() => {}} />
                <CustomButton
                  icon="linkedin"
                  type="active"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl text-primary-black font-extrabold mb-8">
              Let's{" "}
              <span className="font-extrabold text-stroke text-5xl">talk</span>{" "}
              for
              <br />
              Something special
            </h2>
            <p className="text-zinc-500 mb-8">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className="space-y-2">
              <h3 className="text-primary-black font-semibold text-[28px]">
                Youremail@gmail.com
              </h3>
              <p className="text-primary-black font-semibold text-[28px]">
                1234567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
