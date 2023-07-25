import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  ${({ theme }) => theme.mediaQueries.md} {
  }

  ${({ theme }) => theme.mediaQueries.lg} {
  }

  ${({ theme }) => theme.mediaQueries.xl} {
  }
`;

export const Wrap = styled.div`
  padding-top: 40px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-top: 56px;
  }
`;

export const RedWrap = styled.div`
  padding-top: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 90px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-top: 120px;
  }
`;
