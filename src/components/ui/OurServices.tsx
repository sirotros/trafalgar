import Button from "../base/Button";
import ServicesCard from "../base/ServicesCard";
import ServiceDatas from "@/data/ServicesData";

const OurServices = () => {
  return (
    <section className="mt-48">
      <h1 className="text-4xl font-bold leading-[56px] flex justify-center">
        Our Services
      </h1>
      <div className="w-14 h-[2px] bg-black rounded-sm mx-auto mt-6"></div>
      <p className="mt-[33px] text-center text-lg font-light leading-[30px] w-[952px] mx-auto text-gray">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>
      <div className="my-20 flex flex-wrap justify-between gap-9">
        {ServiceDatas.map((serviceData) => {
          return (
            <ServicesCard
              image={serviceData.image}
              title={serviceData.title}
              content={serviceData.content}
            />
          );
        })}
      </div>
      <span className="flex justify-center">
        <Button variant="outline" >
          Learn More
        </Button>
      </span>
    </section>
  );
};
export default OurServices;
