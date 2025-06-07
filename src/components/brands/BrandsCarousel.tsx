'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
}

interface BrandsCarouselProps {
  brands: Brand[];
}

export default function BrandsCarousel({ brands }: BrandsCarouselProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Brands</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="py-4"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="flex flex-col items-center p-4">
                <div className="h-40 w-full bg-white rounded-lg shadow-md border p-6 flex items-center justify-center mb-4 hover:shadow-lg transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-full"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{brand.name}</h3>
                <p className="text-sm text-gray-600 text-center">{brand.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 