import Image from "next/image";
interface ServicesCardType {
  image: string;
  title: string;
  content: string;
}

const ServicesCard = ({ image, title, content }: ServicesCardType) => {
  return (
    <div className="w-[350px] h-[354px] rounded-[20px] shadow-lg  customShadow">
      <Image
        src={image}
        width={67.075}
        height={95}
        alt="Services Card"
        className="mt-[57px] ml-[37px]"
      />
      <h3 className="text-2xl font-bold leading-[56px] mt-5 ml-9">{title}</h3>
      <p className="text-gray font-light leading-7 w-64 ml-9">{content}</p>
    </div>
  );
};
export default ServicesCard;
