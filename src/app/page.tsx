"use client";

import { useRef, useState, WheelEvent } from "react";
import About from "@/components/about";
import Experience from "@/components/experience";
import Home from "@/components/home";
import NavBar from "@/components/navBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const isScrollingRef = useRef(false);
  const lastScrollTimeRef = useRef(0);

  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    if (!swiperRef) return;

    const now = Date.now();
    const MIN_INTERVAL = 800; // ms (jitna zyda, utna slow change)

    // agar abhi animation chal rahi hai ya interval nahi hua → ignore
    if (isScrollingRef.current || now - lastScrollTimeRef.current < MIN_INTERVAL) {
      return;
    }

    // page scroll rok
    e.preventDefault();

    const delta = e.deltaY;

    if (delta > 30) {
      // scroll down → next slide
      isScrollingRef.current = true;
      lastScrollTimeRef.current = now;
      swiperRef.slideNext();
    } else if (delta < -30) {
      // scroll up → prev slide
      isScrollingRef.current = true;
      lastScrollTimeRef.current = now;
      swiperRef.slidePrev();
    }
  };

  return (
    <main
      className="h-screen w-screen overflow-hidden"
      onWheel={handleWheel}
    >
      <div className="h-full w-full">
        <Swiper
          onSwiper={setSwiperRef}
          onTransitionEnd={() => {
            isScrollingRef.current = false;
          }}
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={false} // hum khud handle kar rahe
          keyboard={{ enabled: true }}
          modules={[ Keyboard]}
          className="h-full w-full"
          freeMode={false}
          speed={1200}
        >
          <SwiperSlide>
            <Home />
          </SwiperSlide>
          <SwiperSlide>
            <About />
          </SwiperSlide>
          <SwiperSlide>
            <Experience />
          </SwiperSlide>
        </Swiper>

        <NavBar swiper={swiperRef}/>
      </div>
    </main>
  );
}
