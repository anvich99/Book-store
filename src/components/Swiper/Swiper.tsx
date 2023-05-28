import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

import SwiperCore, { EffectFlip, Navigation } from "swiper";
import { StyledLinkSwiper, StyledSlider, SwiperContainer, SwiperSlideItem } from "./styled";
import { NewBook } from "types";
import { generatePath } from "react-router-dom";
import { ROUTE } from "routes";
import { BookItem } from "components/BookItem/BookItem";

interface SwiperProps {
  books: NewBook[];
}
export const Swiper = ({ books }: SwiperProps) => {
  SwiperCore.use([EffectFlip, Navigation]);

  return (
    <StyledSlider>
      <SwiperContainer
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
          568: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 2,
          },
          1920: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        direction={"horizontal"}
        navigation={true}
        className="mySwiper"
      >
        {books.map((book) => {
          return (
            <SwiperSlideItem key={book.isbn13}>
              <StyledLinkSwiper
                to={generatePath(ROUTE.MAIN + ROUTE.BOOK, { isbn13: book.isbn13 })}
                key={book.isbn13}
              >
                <BookItem book={book} />
              </StyledLinkSwiper>
            </SwiperSlideItem>
          );
        })}
      </SwiperContainer>
    </StyledSlider>
  );
};
