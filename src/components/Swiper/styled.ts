import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Colors } from "ui";

const StyledSlider = styled.div`
  max-width: 100%;
  display: grid;
`;
const SwiperContainer = styled(Swiper)`
  max-width: 100%;
  height: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  padding-top: 68px;

  .swiper-button-next {
    background-repeat: no-repeat;
    background-position: center;
    right: 0;
    top: 15px;
  }
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-repeat: no-repeat;
    background-position: center;
    left: auto;
    right: 40px;
    top: 15px;
  }
  .swiper-button-prev::after {
    display: none;
  }
`;
const SwiperSlideItem = styled(SwiperSlide)`
  max-width: 352px;
  & > :nth-child(n + 5) > :nth-child(1) {
    background-color: ${Colors.Green};
  }
  & > :nth-child(2n) > :nth-child(1) {
    background-color: ${Colors.Orange};
  }
  & > :nth-child(3n) > :nth-child(1) {
    background-color: ${Colors.Blue};
  }
  & > :nth-child(3n + 1) > :nth-child(1) {
    background-color: ${Colors.Purple};
  }
`;
const StyledLinkSwiper = styled(Link)`
  text-decoration: none;
  :hover {
    p {
    }
  }
`;

export { StyledSlider, SwiperContainer, SwiperSlideItem, StyledLinkSwiper };
