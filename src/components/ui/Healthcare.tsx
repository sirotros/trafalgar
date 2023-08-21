import Image from "next/image";
import Illustration from "../../../public/trafalgar-illustration.svg";
import Button from "../base/Button";

const Healthcare = () => {
  return (
    <div className="flex justify-between items-center mt-[220px]">
      <Image
        src={Illustration}
        width={650}
        height={477}
        alt="Trafalgar Illustration"
      />
      <div className="flex flex-col justify-around h-[388px]">
        <h1 className="text-4xl">Leading healthcare providers</h1>
        <div className="w-14 h-[2px] bg-black font-bold leading-[56px]"></div>
        <p className="text-gray font-light text-lg leading-[30px] w-[450px]">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </p>
        <Button variant="outline">Learn more</Button>
      </div>
    </div>
  );
};
export default Healthcare;
