import React, { FC } from 'react';
import styled from 'styled-components';
import {
  Flex,
  Image as BaseImage,
  ExternalLink,
  Content,
  HashLink as BaseHashLink,
} from '../Toolkit';

import { InputField } from '../Input';

import Logo from '../../assets/images/logo.png';
import Discord from '../../assets/images/discord.png';
import Twitter from '../../assets/images/twitter.png';
import { useIsMobile } from '../../hooks/useDevice';

const Container = styled.div`
  width: 100%;
  background: #000000;
  border-top: 1px solid #665c61;
  margin-top: 56px;
`;

const MainSection = styled.div`
  width: 797px;
  height: 56px;
  gap: 80px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 120px;

  ${({ theme }) => theme.mediaQueries.md} {
  }

  ${({ theme }) => theme.mediaQueries.lg} {
  }

  ${({ theme }) => theme.mediaQueries.xl} {
  }

  & .gradientLine {
    background: linear-gradient(#8932f6, #f971ba);
    width: 797px;
    height: 1px;
  }
`;

const JoinSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  & .narration {
    text-align: left;
  }
  & p {
    font-family: Public Sans;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.5px;
    text-align: left;
    color: #f2ebef;
  }
  & b {
    font-family: Public Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #b2a6ad;
  }
  & button {
    width: 125px;
    height: 56px;
    padding: 0px 20px 0px 20px;
    border-radius: 8px;
    border: 1px solid #ccc2c7;
    color: #ccc2c7;
    background: #000000;
    font-family: Public Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

const PrivacySection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  & p {
    font-family: Public Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    color: #b2a6ad;
    width: fit-content;
    min-width: fit-content;
  }
  padding-bottom: 120px;
`;

const LogoImage = styled(BaseImage)`
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 360px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 500px;
  }
`;

const SocialImage = styled(BaseImage)`
  width: 60px;
  height: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 90px;
    height: 90px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 140px;
    height: 140px;
  }
`;

const HashLink = styled(BaseHashLink)`
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
  text-decoration: none;

  &:hover:not(:disabled):not(:active) {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    margin-bottom: 0;
    font-size: 22px;
    line-height: 29px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    font-family: FletcherGothicFLF;
    font-weight: 500;
    font-size: 42px;
    line-height: 50px;
  }
`;

const SocialWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin-right: 83px;
`;

const NavWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  width: auto;
`;

const Footer: FC = () => {
  const isMobile = useIsMobile();

  return (
    <Container>
      <MainSection>
        {/* <LogoImage src={Logo} mb={isMobile ? '20px' : '60px'} alt="Logo" /> */}
        {!isMobile ? (
          <>
            <JoinSection>
              <div className="narration">
                <p>Join our newsletter</p>
                <b>Every party — straight to your inbox.</b>
              </div>
              <InputField placeholder="Enter your e-mail" style={{ marginRight: 10 }} />
              <button>Subscribe</button>
            </JoinSection>
            <div className="gradientLine"></div>
            <PrivacySection>
              <div>
                <p>Privacy Policy</p>
                <p>Terms of Conditions</p>
              </div>
              <p>22NIGHTS BV. All rights reserved.</p>
            </PrivacySection>
          </>
        ) : (
          <>
            <JoinSection>
              <div className="narration">
                <p>Join our newsletter</p>
                <b>Every party — straight to your inbox.</b>
              </div>
              <InputField placeholder="Enter your e-mail" style={{ marginRight: 10 }} />
              <button>Subscribe</button>
            </JoinSection>
            <div className="gradientLine"></div>
            <PrivacySection>
              <div>
                <p>Privacy Policy</p>
                <p>Terms of Conditions</p>
              </div>
              <p>22NIGHTS BV. All rights reserved.</p>
            </PrivacySection>
          </>
        )}
      </MainSection>
    </Container>
  );
};

export default Footer;
