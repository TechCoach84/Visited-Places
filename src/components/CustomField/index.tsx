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

const Container = styled.div<{ marginLeft?: number; marginRight?: number }>`
  text-align: center;
  width: fit-content;
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : '0px')};
  margin-right: ${({ marginRight }) => (marginRight ? `${marginRight}px` : '0px')};
`;

const Image = styled(BaseImage)`
  width: 32px;
`;

const MainText = styled.div`
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`;

interface CustomFieldProps {
  image: string;
  content?: ReactNode;
  children?: ReactNode;
  marginLeft?: number;
  marginRight?: number;
  style?: React.CSSProperties | undefined;
  className?: string;
}

const CustomField = ({
  image,
  content,
  children,
  marginLeft,
  marginRight,
  style,
  className,
}: CustomFieldProps) => {
  return (
    <Container
      marginLeft={marginLeft}
      marginRight={marginRight}
      style={style}
      className={className}
    >
      {image && <Image src={image} alt="Image" />}
      {content && <MainText>{content}</MainText>}
      {children}
    </Container>
  );
};

export default CustomField;
