import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const StyledSlider = styled.div`
  display: grid;
`;
const SwiperContainer = styled(Swiper)`
  height: 100%;
  display: flex;
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
const SwiperSlideItem = styled(SwiperSlide)``;
const StyledLinkSwiper = styled(Link)`
  text-decoration: none;
  :hover {
    p {
    }
  }
`;

export { StyledSlider, SwiperContainer, SwiperSlideItem, StyledLinkSwiper };
