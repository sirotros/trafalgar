import TestimonialsCard from "../base/TestimonialsCard";
import TestimonialsData from "@/data/TestimonialsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Testimonials = () => {
  return (
    <div className="flex justify-center overflow-x-hidden mt-[251px] h-[700px] ">
      <div className="w-[1120px] h-[425px] rounded-3xl linear">
        <h1 className="text-4xl text-white font-bold text-center mt-16">
          What our customer are saying
        </h1>
        <div className="w-full flex justify-center mt-6">
          <div className="w-14 h-[2px] bg-white"></div>
        </div>

        <div className="ml-32 mt-16">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{ nextEl: ".prevEl", prevEl: ".nextEl" }}
            pagination={{ clickable: true, el: ".pagination" }}
          >
            {TestimonialsData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialsCard
                    image={item.image}
                    name={item.name}
                    title={item.title}
                    description={item.description}
                  />
                </SwiperSlide>
              );
            })}
            <div className="flex justify-between w-[336px] h-5 mt-36 ml-[235px]">
              <button className="nextEl flex items-center justify-center">
                <BsArrowLeft color="blue" className="text-2xl" />
              </button>
              <div className="pagination flex items-center justify-center"></div>
              <button className="prevEl flex items-center justify-center">
                <BsArrowRight color="blue" className="text-2xl" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
