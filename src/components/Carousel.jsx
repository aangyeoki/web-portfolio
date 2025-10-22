import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import { certificates } from '../constants';

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
<div className="relative w-full max-w-6xl mx-auto my-8">
  {swiperReady && (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      loop
      slidesPerView="auto"
      spaceBetween={20}
      coverflowEffect={{
        rotate: 5,
        stretch: 0,
        depth: 80,
        modifier: 0.9,}}
      pagination={{ clickable: true }}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
      {certificates.map((cert, index) => (
        <SwiperSlide key={index} className="!w-[480px] flex justify-center">
          <img
            src={cert.img}
            alt={cert.name}
            className=" object-none w-full h-[360px] rounded-lg shadow-lg bg-white"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )}

  {/* Tombol navigasi */}
  <div
    ref={prevRef}
    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/70 hover:bg-white p-2 rounded-full shadow"
  >
    <IoArrowBackOutline size={22} />
  </div>
  <div
    ref={nextRef}
    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/70 hover:bg-white p-2 rounded-full shadow"
  >
    <IoArrowForwardOutline size={22} />
  </div>
</div>
  );
};

export default Carousel;