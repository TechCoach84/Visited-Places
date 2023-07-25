import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Image as BaseImage } from '../Toolkit';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${fadeIn} 2s;
`;

const Image = styled(BaseImage)`
  width: 250px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 500px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 650px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 1000px;
  }
`;

interface FadeTransitionProps {
  img: string;
}

const FadeTransition: FC<FadeTransitionProps> = ({ img }) => (
  <Container>
    <Image src={img} alt="FadeImage" />
  </Container>
);

export default FadeTransition;
