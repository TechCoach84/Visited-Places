import React, { FC } from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { Image as BaseImage } from '../Toolkit';

import 'react-multi-carousel/lib/styles.css';

const Container = styled.div`
  .react-multi-carousel-list {
    width: 250px;

    ${({ theme }) => theme.mediaQueries.md} {
      width: 500px;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      width: 800px;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
      width: 1000px;
    }
  }
`;

const Image = styled(BaseImage)`
  width: 250px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 500px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 800px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 1000px;
  }
`;

const responsive = {
  mobile: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
};

interface CarouselProps {
  images: string[];
}

const MultiCarousel: FC<CarouselProps> = ({ images }) => (
  <Container>
    <Carousel autoPlay autoPlaySpeed={2000} responsive={responsive} arrows={false} infinite>
      {images.map((img, id) => (
        <Image key={id} src={img} alt="Carousel" />
      ))}
    </Carousel>
  </Container>
);

export default MultiCarousel;
