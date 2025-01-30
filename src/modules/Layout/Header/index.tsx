import Navbar from "../NavBar";
import CustomButton from "../../../components/button/CustomButton";

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white py-4 mx-16">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-primary-black">
          My Portfolio
        </div>
        <Navbar />
        <CustomButton
          text="Resume"
          icon="download"
          iconPosition="right"
          onClick={() => (window.location.href = "/path/to/resume.pdf")}
          type="default"
        />
      </nav>
    </header>
  );
};

export default Header;
