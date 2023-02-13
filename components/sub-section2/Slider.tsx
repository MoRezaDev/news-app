import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <Swiper
      className="rounded-md"
      loop
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <img
          className="h-[250px] sm:h-[350px]"
          style={{ width: "100%" }}
          src="/apple.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[250px] sm:h-[350px]"
          style={{ width: "100%" }}
          src="/lenovo.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[250px] sm:h-[350px]"
          style={{ width: "100%" }}
          src="/asus.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
