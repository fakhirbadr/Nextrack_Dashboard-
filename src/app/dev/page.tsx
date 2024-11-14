"use client";
import React from "react";
import { cn } from "@/lib/utils";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import { months } from "@/constants";
import { getMonth } from "date-fns";
// import Swiper from "swiper";

export default function App() {
  const direction = "vertical" as "vertical" | "horizontal";
  const [month, setMonth] = React.useState<number>(getMonth(new Date()));

  function handleSlideChange(swiper: SwiperClass) {
    setMonth(swiper.activeIndex);
  }
  return (
    <div className="space-y-4 p-6">
      <h1 className="text-center text-4xl font-bold">
        Swiper {month} {months[month]}
      </h1>
      <div className="relative mx-auto w-fit">
        <Swiper
          modules={[Keyboard, Mousewheel]}
          direction={direction}
          keyboard={{
            enabled: true,
          }}
          defaultValue={month}
          draggable={false}
          centeredSlides={true}
          mousewheel={true}
          slidesPerView={5}
          spaceBetween={4}
          className={cn("h-40 w-12 rounded-lg border")}
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
          }}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiper.slideTo(month);
          }}
        >
          {months.map((month, i) => (
            <SwiperSlide key={i} className="">
              {({ isActive }) => (
                <div
                  className={cn(
                    "grid h-full w-full select-none place-content-center",
                    {
                      "text-primary": isActive,
                    },
                  )}
                >
                  {month.slice(0, 3)}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-1/2 right-1/2 h-10 w-[200%] translate-x-1/2 translate-y-1/2 border-y border-white/20"></div>
      </div>
    </div>
  );
}
