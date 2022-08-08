import React, { FC } from 'react';
import Slider from 'react-slick';
import { SliderWrapper, SliderPattern, HomeWrapper } from './styles';
import { sliderSettings, sliderElements } from '../../constants';

const Home: FC = () => {
  return (
    <HomeWrapper>
      <Slider {...sliderSettings}>
        {sliderElements.map(({ text, imgUrl }) => (
          <React.Fragment key={imgUrl}>
            <SliderPattern />
            <SliderWrapper {...{ imgUrl }}>
              <h2>{text}</h2>
            </SliderWrapper>
          </React.Fragment>
        ))}
      </Slider>
    </HomeWrapper>
  );
};

export default Home;
