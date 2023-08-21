import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

interface ArticleCardType {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ArticleCard = ({ image, title, description, link }: ArticleCardType) => {
  return (
    <div className="w-[350px] h-[512px] bg-white rounded-[20px] overflow-hidden ">
      <Image src={image} width={350} height={246} alt={title} />
      <h2 className="font-bold text-[21px] w-[251px] mx-auto mt-[24px]">{title}</h2>
      <p className="font-light w-[251px] mx-auto mt-3">{description}</p>
      <Link href={link} className="text-blue-600 flex items-center gap-3 ml-12 mt-[25px]">Read More <BsArrowRight className="mt-[1px]" /></Link>
    </div>
  );
};
export default ArticleCard;
