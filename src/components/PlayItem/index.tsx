import React, { ReactNode } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import {
  Flex,
  Image as BaseImage,
  Title,
  SubTitle,
  Content,
  HashLink,
  ExternalLink,
  ListItem,
  Wrapper,
  Wrap,
} from '../Toolkit';

const Container = styled.div`
  display: flex;
  background: #262123;
  margin-bottom: 16px;
`;

const InfoSection = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

const Image = styled(BaseImage)`
  width: 156px;
  height: 141px;
  border-radius: 12px 0px 0px 12px;
`;

const MainText = styled.div`
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

const ButtonSection = styled.div`
  display: flex;
  margin-top: 15px;
  & button {
    font-family: Public Sans;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #5559df;
    width: fit-content;
  }
`;

interface PlayItemProps {
  image: string;
  title: string;
  subtitle: string;
  numbers: number;
  tooltip: string;
  children?: ReactNode;
  style?: React.CSSProperties | undefined;
}

const PlayItem = ({ image, title, subtitle, numbers, tooltip, children, style }: PlayItemProps) => {
  return (
    <Container style={style}>
      {image && <Image src={image} alt="Image" />}
      <InfoSection>
        {title && <MainText>{title}</MainText>}
        {subtitle && <MainText>{subtitle}</MainText>}
        <ButtonSection>
          <button style={{ marginRight: 5 }}>{numbers}+</button>
          <button>{tooltip}</button>
        </ButtonSection>
        {children}
      </InfoSection>
    </Container>
  );
};

export default PlayItem;
