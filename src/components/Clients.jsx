import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const clientLogos = [
  "client1.png",
  "client2.png",
  "client3.png",
  "client4.png",
  "client5.png",
  "client6.png",
];

const ClientSlider = () => {
  return (
    <section className="py-10 px-5">
      <h1 className="text-4xl text-teal-600 text-center mb-5">
        Our Clients
      </h1>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-28">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-full object-contain hover:grayscale transition"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientSlider;
