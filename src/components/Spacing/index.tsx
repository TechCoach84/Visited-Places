import styled from 'styled-components';
import { Image as BaseImage, Title, SubTitle, Content } from '../Toolkit';

export const VineImage = styled(BaseImage)`
  width: auto;
  height: 90px;
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: auto;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    height: 120px;
    margin-bottom: 90px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 150px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 200px;
    margin-bottom: 120px;
  }
`;

// Title
export const RedTitle = styled(Title)`
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 90px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 120px;
  }
`;

export const GreenTitle = styled(Title)`
  margin-bottom: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 60px;
  }
`;

// SubTitle
export const GreenSubTitle = styled(SubTitle)`
  margin-bottom: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 60px;
  }
`;

export const OrangeSubTitle = styled(SubTitle)`
  margin-bottom: 15px;
  text-align: left;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 30px;
  }
`;

// Content //
export const RedContent = styled(Content)`
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 90px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 120px;
  }
`;

export const GreenContent = styled(Content)`
  margin-bottom: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 60px;
  }
`;

export const OrangeContent = styled(Content)`
  margin-bottom: 15px;
  text-align: left;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-bottom: 30px;
  }
`;
