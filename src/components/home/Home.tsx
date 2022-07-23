import { FC } from 'react';
import Slider from 'react-slick';
import { SliderWrapper, SliderPattern } from './styles';
import { sliderSettings, sliderElements } from '../../constants';

const Home: FC = () => {
  return (
    <div>
      <Slider {...sliderSettings}>
        {sliderElements.map(({ text, imgUrl }) => (
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
