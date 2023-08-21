import Image from "next/image";
import TrafalgarHeader from "../../../public/trafalgar-header.svg";
import Button from "../base/Button";
const Header = () => {
  return (
    <div className="flex justify-between mt-[84px]">
      <div className="w-[445px] my-auto">
        <h1 className="text-5xl font-bold leading-[56px]">
          Virtual healthcare for you
        </h1>
        <p className="text-[21px] text-gray font-light leading-8 mt-[25px]">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <Button children="Consult today" classname="mt-12"/>
      </div>
      <Image
        src={TrafalgarHeader}
        width={693}
        height={598}
        alt="Trafalgar Header"
      />
    </div>
  );
};
export default Header;
