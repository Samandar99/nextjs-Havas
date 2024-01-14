import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper/core";
function Carusel() {
    SwiperCore.use([Autoplay]);
  return (
    <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Image className="banner" src="/images/home-banner-1.png" alt="me" width="1000" height="611" priority={true} />
        </SwiperSlide>
        <SwiperSlide><Image className="banner" src="/images/magazine-banner.png" alt="me" width="1000" height="611" priority={true} /></SwiperSlide>

      </Swiper>
  )
}

export default Carusel
