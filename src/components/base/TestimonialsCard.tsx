import Image from "next/image";

interface TestimonialsCardType {
  image: string;
  name: string;
  title: string;
  description: string;
}

const TestimonialsCard = ({
  image,
  name,
  title,
  description,
}: TestimonialsCardType) => {
  return (
    <div className="flex w-[884px] h-[141px] justify-between">
      <div className="flex justify-between w-[354px]">
        <div className="w-[133px] h-[133px] border-[5px] border-white rounded-full">
          <Image
            src={image}
            width={133}
            height={133}
            alt="Profile Image"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-[22px] font-bold leading-[48px]">
            {name}
          </h1>
          <span className="text-white opacity-[.85]">{title}</span>
        </div>
      </div>
      <p className="text-white opacity-90 w-[450px] flex items-center">
        {description}
      </p>
    </div>
  );
};

export default TestimonialsCard;
