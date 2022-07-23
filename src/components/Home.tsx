import React, { FC } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { SliderWrapper, SliderPattern } from '../components/styles';

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
};

const sliders: { text: string; imgUrl: string }[] = [
  { text: 'WELCOME TO MY UNIVERSE', imgUrl: '/1.jpg' },
  { text: 'CREATIVITY. INNOVATION', imgUrl: '/2.jpg' },
  { text: 'CHECK ALL MY WORKS', imgUrl: '/3.jpg' },
];

const Home: FC = () => {
  return (
    <div>
      <Slider {...settings}>
        {sliders.map(({ text, imgUrl }) => (
          <>
            <SliderPattern />
            <SliderWrapper {...{ imgUrl }}>
              <h2>{text}</h2>
            </SliderWrapper>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
