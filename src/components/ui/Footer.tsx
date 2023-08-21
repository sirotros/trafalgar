import Logo from "../base/Logo";

const Footer = () => {
  return (
    <footer className="linear h-[432px] mt-[129px]  text-white">
      <div className="container flex items-center justify-between h-full">
      <div>
        <Logo variant="light" />
        <p className="w-[391px] mt-[22px] text-lg font-light">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <p className="mt-[31px] font-light">©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>
      <div>
        <h1 className="font-bold text-xl">Company</h1>
        <ul className="mt-6">
          <li className="text-lg font-light mt-2">About</li>
          <li className="text-lg font-light mt-2">Testimonials</li>
          <li className="text-lg font-light mt-2">Find a doctor</li>
          <li className="text-lg font-light mt-2">Apps</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-xl">Region</h1>
        <ul className="mt-6">
          <li className="text-lg font-light mt-2">Indonesia</li>
          <li className="text-lg font-light mt-2">Singapore</li>
          <li className="text-lg font-light mt-2">Hongkong</li>
          <li className="text-lg font-light mt-2">Canada</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-xl">Help</h1>
        <ul className="mt-6">
          <li className="text-lg font-light mt-2">Help Center</li>
          <li className="text-lg font-light mt-2">Contact Support</li>
          <li className="text-lg font-light mt-2">Instructions</li>
          <li className="text-lg font-light mt-2">How it works</li>
        </ul>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
