const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo with text */}
          <div className="flex items-center gap-2">
            <h5 className="font-bold text-xl text-primary-white">
              Adithya Baliga B
            </h5>
          </div>

          <div className="text-sm text-gray-400 flex flex-col items-end space-y-1">
            <h6 className="font-semibold text-base text-primary-white">
              © 2019-2023 Personal
            </h6>
            <h6 className="font-semibold text-base text-primary-white">
              Made in Figma
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
