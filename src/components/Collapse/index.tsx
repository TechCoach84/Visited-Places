import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Content, Image as BaseImage } from '../Toolkit';
import { OrangeContent as BaseOrangeContent } from '../Spacing';

import UpIcon from '../../assets/images/up.png';
import DownIcon from '../../assets/images/down.png';

const Container = styled.div<{ isLast?: boolean }>`
  margin-bottom: ${({ isLast }) => (isLast ? '60px' : '30px')};

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: ${({ isLast }) => (isLast ? '90px' : '30px')};
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: ${({ isLast }) => (isLast ? '120px' : '30px')};
  }
`;

const CollapseWrapper = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 30px;
  }
`;

const Divider = styled.div`
  margin-bottom: 30px;
  border: ${({ theme }) => `1px solid ${theme.colors.textPrimary}`};
`;

const ContentValue = styled(Content)`
  white-space: pre-wrap;
`;

const Image = styled(BaseImage)`
  width: 26px;
  height: 15px;
  margin-top: 5px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 36px;
    height: 20.5px;
    margin-top: 0;
  }
`;

const CloseWrapper = styled(Flex)`
  margin-bottom: 10px;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 15px;
  }
`;

const OrangeContent = styled(BaseOrangeContent)`
  white-space: pre-wrap;
`;

interface CollapseProps {
  id?: string;
  title: string;
  value?: string;
  isLast?: boolean;
}

const Collapse: FC<CollapseProps> = ({ id, title, value, isLast, children }) => {
  const [isCollapse, setIsCollapse] = useState(false);

  const changeHandler = useCallback(() => {
    setIsCollapse(!isCollapse);
  }, [isCollapse]);

  const closeHandler = useCallback(() => {
    setIsCollapse(false);
  }, []);

  return (
    <Container id={id} isLast={isLast}>
      <CollapseWrapper onClick={changeHandler}>
        <ContentValue>{title}</ContentValue>
        <Image src={isCollapse ? UpIcon : DownIcon} width={36} height={20.5} alt="Icon" />
      </CollapseWrapper>
      {isCollapse && <OrangeContent>{value}</OrangeContent>}
      {isCollapse && children}
      {isCollapse && (
        <CloseWrapper onClick={closeHandler}>
          <Image src={UpIcon} alt="Icon" />
        </CloseWrapper>
      )}
      <Divider />
    </Container>
  );
};

export default Collapse;
