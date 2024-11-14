"use client";
import { useGlobalStore } from "@/app/store";
import { months, years } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function Sidebar({ className, ...props }: SidebarProps) {
  const { year, month, setYear, setMonth } = useGlobalStore();
  function handleSlideChange(swiper: SwiperClass) {
    setMonth(swiper.activeIndex);
  }
  return (
    <aside
      className={cn(
        "w-[7rem] shrink-0 overflow-auto pr-3 transition-[width] duration-300",
        className,
      )}
      {...props}
    >
      <div className="my-4 flex flex-col gap-2">
        <Link href="/">
          <div className="relative h-8 w-full text-center text-3xl font-extrabold">
            <Image src="/logo.svg" fill alt="logo" />
          </div>
        </Link>
        <div className="text-center text-sm font-extrabold">
          Project Management Performance
        </div>
        <div className="mx-auto mt-6 flex w-fit flex-col border-r border-white/10">
          {years.map((item) => (
            <button
              className="group relative px-3 py-1.5 font-bold"
              key={item}
              onClick={() => setYear(item)}
            >
              <span
                className={cn(
                  "inline-block scale-75 text-base transition-transform duration-150 group-hover:scale-100",
                  {
                    "scale-100 text-primary": year === item,
                  },
                )}
              >
                {item}
              </span>
              <span
                className={cn(
                  "absolute bottom-1/2 right-0 size-3 translate-x-1/2 translate-y-1/2 scale-50 rounded-full bg-white/75 transition-transform group-hover:scale-100",
                  {
                    "scale-100 bg-primary": year === item,
                  },
                )}
              ></span>
            </button>
          ))}
        </div>
        <div className="relative mx-auto mt-6 w-fit">
          <Swiper
            modules={[Keyboard, Mousewheel]}
            direction={"vertical"}
            keyboard={{
              enabled: true,
            }}
            defaultValue={month}
            draggable={false}
            centeredSlides={true}
            mousewheel={true}
            slidesPerView={5}
            spaceBetween={4}
            className={cn("h-40 w-16 rounded-lg border border-white/20")}
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 40%, black 60%, transparent)",
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
          <div className="absolute bottom-1/2 right-1/2 h-9 w-[150%] translate-x-1/2 translate-y-1/2 border-y border-white/20"></div>
        </div>
        <div
          className="text-l mt-40 flex w-fit flex-col items-center whitespace-nowrap font-extrabold uppercase text-blue-400"
          style={{ transform: "rotate(-90deg)" }}
        >
          maintenance 4.0
        </div>
      </div>
    </aside>
  );
}
