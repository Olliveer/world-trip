import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { CarouselItem } from './CarouselItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function Carousel() {
  return (
    <Swiper navigation modules={[Navigation, Pagination]} pagination>
      <SwiperSlide>
        <CarouselItem
          urlImage="images/swiper/europe.jpg"
          continent="Europa"
          callText="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          urlImage="images/swiper/europe2.jpg"
          continent="América do Sul"
          callText="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          urlImage="images/swiper/europe.jpg"
          continent="América do Norte"
          callText="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          urlImage="images/swiper/europe.jpg"
          continent="Ásia"
          callText="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          urlImage="images/swiper/europe.jpg"
          continent="África"
          callText="O continente mais antigo."
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem
          urlImage="images/swiper/europe.jpg"
          continent="Oceania"
          callText="O continente mais antigo."
        />
      </SwiperSlide>
    </Swiper>
  );
}
