import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem } from './CarouselItem';

type Continent = {
  id: string;
  name: string;
  image: string;
  description: string;
  callText: string;
};
interface CarouselProps {
  data: Continent[];
}

export function Carousel({ data }: CarouselProps) {
  return (
    <Swiper navigation modules={[Navigation, Pagination]} pagination>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <Link href={`/continent/${item.id}`} passHref>
            <Button as="a" variant="unstyled">
              <CarouselItem
                id={item.id}
                urlImage={item.image}
                continent={item.name}
                callText={item.callText}
              />
            </Button>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
