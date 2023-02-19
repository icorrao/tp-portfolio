import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={3}
      breakpoints={{
        // when window width is >= 640px
        1: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        960: {
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <div class="testimonials">
          <div class="tarjeta testimonial">
            <div class="foto"></div>
            <div class="comillas">
              <i class="bi bi-quote comillas"></i>
            </div>
            <div class="tarjeta-texto">
              <h3>Stefhan Gill</h3>
              <div class="estrellas">
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, laudantium? Facere illum non perferendis impedit
                quibusdam suscipit ex, eligendi atque doloremque assumenda illo.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonials">
          <div class="tarjeta testimonial">
            <div class="foto"></div>
            <div class="comillas">
              <i class="bi bi-quote comillas"></i>
            </div>
            <div class="tarjeta-texto">
              <h3>Stefhan Gill</h3>
              <div class="estrellas">
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, laudantium? Facere illum non perferendis impedit
                quibusdam suscipit ex, eligendi atque doloremque assumenda illo.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonials">
          <div class="tarjeta testimonial">
            <div class="foto"></div>
            <div class="comillas">
              <i class="bi bi-quote comillas"></i>
            </div>
            <div class="tarjeta-texto">
              <h3>Stefhan Gill</h3>
              <div class="estrellas">
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, laudantium? Facere illum non perferendis impedit
                quibusdam suscipit ex, eligendi atque doloremque assumenda illo.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="testimonials">
          <div class="tarjeta testimonial">
            <div class="foto"></div>
            <div class="comillas">
              <i class="bi bi-quote comillas"></i>
            </div>
            <div class="tarjeta-texto">
              <h3>Stefhan Gill</h3>
              <div class="estrellas">
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, laudantium? Facere illum non perferendis impedit
                quibusdam suscipit ex, eligendi atque doloremque assumenda illo.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="testimonials">
          <div class="tarjeta testimonial">
            <div class="foto"></div>
            <div class="comillas">
              <i class="bi bi-quote comillas"></i>
            </div>
            <div class="tarjeta-texto">
              <h3>Stefhan Gill</h3>
              <div class="estrellas">
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
                <i class="bi bi-star-fill estrella"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, laudantium? Facere illum non perferendis impedit
                quibusdam suscipit ex, eligendi atque doloremque assumenda illo.
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export { Testimonials };
