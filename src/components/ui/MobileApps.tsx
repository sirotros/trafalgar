import Image from "next/image";

import MobileAppsImage from "../../../public/trafakgar-mobile-apps.svg";
import Button from "../base/Button";

import { BsArrowDown } from "react-icons/bs";

const MobileApps = () => {
  return (
    <div className="flex justify-between items-center mt-[220px]">
      <div className="flex flex-col justify-around h-[388px]">
        <h1 className="text-4xl">Download our mobile apps</h1>
        <div className="w-14 h-[2px] bg-black font-bold leading-[56px]"></div>
        <p className="text-gray font-light text-lg leading-[30px] w-[450px]">
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
        </p>
        <Button variant="outline">
          Download <BsArrowDown className="ml-3"/>
        </Button>
      </div>
      <Image
        src={MobileAppsImage}
        width={665}
        height={434}
        alt="Trafalgar Mobile App"
      />
    </div>
  );
};
export default MobileApps;
