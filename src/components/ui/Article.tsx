import ArticleData from "@/data/ArticleData";
import ArticleCard from "../base/ArticleCard";
import { useState } from "react";
import Button from "../base/Button";
const Article = () => {
  const [displayAmount, setDisplayAmount] = useState<number>(3);
  const setAmount = () => {
    if (displayAmount === 3) {
      setDisplayAmount(ArticleData.length);
    } else {
      setDisplayAmount(3);
    }
  };
  return (
    <section className="mb-10 ">
      <h1 className="text-center text-4xl font-bold">
        Check out our latest article
      </h1>
      <div className="flex justify-center my-9">
        <div className="w-14 h-[2px] bg-black rounded-[5px] text-center"></div>
      </div>
      <div className="w-[1110px] flex flex-wrap justify-between mx-auto">
        {ArticleData.slice(0, displayAmount).map((article, index) => {
          return (
            <ArticleCard
              image={article.image}
              title={article.title}
              description={article.description}
              link={article.link}
              key={index}
            />
          );
        })}
      </div>
      <Button variant="outline" classname="mx-auto" onClick={() => setAmount()}>
        {displayAmount === 3 ? "View More" : "View less"}
      </Button>
    </section>
  );
};
export default Article;
