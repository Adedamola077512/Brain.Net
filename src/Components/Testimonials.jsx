import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from 'swiper';
import './Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";



const testimonials = [
  {
    name: 'Alex Miller',
    text: 'Inletsky GL JS made it incredibly easy to integrate 3D maps into our web app. The performance and customization options are top-notch!',
    img: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Samantha.R',
    text: 'We use Inletsky for real-time geographic visualization, and the results have been impressive. Our clients love the smooth and interactive maps.',
    img: 'https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    name: 'Dr. Julian Parker',
    text: 'Inletskys detailed rendering helped our students better understand topography and spatial data. It’s a great learning tool',
    img: 'https://images.openai.com/thumbnails/9c9c189afe5ef450308aab13e16bd208.jpeg',
  },
  {
    name: 'Priya Kumar',
    text: 'As a startup, we needed a reliable and scalable map solution. Inletsky delivered powerful features at a reasonable price.',
    img: 'https://images.openai.com/thumbnails/0f53b6c0b71059ef88a55ab4120ba289.jpeg',
  },
  {
    name: 'Luis Garcia',
    text: 'I appreciate the design flexibility of Inletsky GL JS. It lets me match the map styling with our brand perfectly.',
    img: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Nina Taylor',
    text: 'Inletsky GL JS has transformed how we visualize infrastructure projects. Its 3D capabilities and offline support are game-changers for fieldwork',
    img: 'https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function TestimonialsSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="testimonials-section py-5 text-center m-5">
      <div className="container">
        <button className="btn-see-more mb-3">See what’s awesome</button>
        <h2 className="fw-bold display-5 mb-3 text-white">Testimonials</h2>
        <p className="text-secondary mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={4}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="testimonials-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card p-4 rounded">
                <div className="d-flex align-items-center mb-3">
                  <img src={testimonial.img} alt={testimonial.name} className="avatar me-2" />
                  <h5 className="mb-0 text-white">{testimonial.name}</h5>
                </div>
                <p className="text-light small">{testimonial.text}</p>
                <div className="stars mt-3">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Controls */}
        <div className="custom-controls mt-4">
          <button ref={prevRef} className="swiper-button-prev-custom btn-control"><BsArrowLeftShort className='icon'/></button>
          <button ref={nextRef} className="swiper-button-next-custom btn-control"><BsArrowRightShort className='icon'/></button>
        </div>
      </div>
    </section>
  );
}
