import React, { FC, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button as BaseButton, Flex, Image, Link as BaseLink, ExternalLink } from '../Toolkit';
import useMatchBreakpoints from '../../hooks/useMatchBreakpoints';
import { useIsMobile, useIsTablet } from '../../hooks/useDevice';
import { connect } from '../../redux/actions';
import { RootState } from '../../redux/types';

import Logo from '../../assets/images/logo.png';
import Discord from '../../assets/images/discord.png';
import Twitter from '../../assets/images/twitter.png';
import Hamburger from '../../assets/images/hamburger.svg';
import Close from '../../assets/images/close.png';
import { Text } from '../Toolkit';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 24px;
  z-index: 100;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0px 50px 0px 50px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 30px 50px 0px 50px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 30px 50px 0px 50px;
  }
`;

const SocialWrapper = styled(Flex)`
  justify-content: space-between;
  padding: 32px 0px 0px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 64px 0px 0px;
  }
`;

const SocialWrap = styled(Flex)`
  justify-content: space-between;
  width: 470px;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 470px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 470px;
  }
`;

const Link = styled(BaseLink)`
  line-height: 0;
`;

const Button = styled(BaseButton)`
  width: 140px;
  padding: 0px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
  }

  ${({ theme }) => theme.mediaQueries.xl} {
  }
`;

const NavsWrapper = styled(Flex)<{ isMobile?: boolean }>`
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  justify-content: space-between;
  padding: 30px 0 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 0 9px 15px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 135px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 0 250px;
  }
`;

const TabletWrapper = styled.div`
  padding: 30px 0 0;
`;

const MobileWrapper = styled(Flex)`
  justify-content: space-between;
`;

const MenuWrapper = styled.div<{ isMobile?: boolean }>`
  width: auto;
  margin-bottom: ${({ isMobile }) => (isMobile ? '30px' : '0')};
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 60px 60px 90px;
  background: ${({ theme }) => theme.colors.primary};
  z-index: 100;
`;

const NavsLink = styled(BaseLink)`
  text-shadow: 2px 2px 4px #000000;

  &:hover:not(:disabled):not(:active) {
    text-decoration: underline;
  }
`;

const LogoImage = styled(Image)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 42px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 60px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 80px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 80px;
  }
`;

const abbreviateAddress = (address = '', lengthStart = 5, lengthEnd = 5) => {
  return `${address.substring(0, lengthStart)}...${address.substring(
    address.length - lengthEnd,
    address.length,
  )}`;
};

const Header: FC = () => {
  const { isXxl } = useMatchBreakpoints();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const dispatch = useDispatch();
  const { account } = useSelector((state: RootState) => state);

  const [isDropdown, setIsDropdown] = useState(false);

  const connectHandler = useCallback(
    (e) => {
      e.preventDefault();
      setIsDropdown(false);
      dispatch(connect());
    },
    [dispatch],
  );

  const clickHandler = () => {
    console.log('clicked');
  };

  const changeHandler = useCallback(() => {
    setIsDropdown(!isDropdown);
  }, [isDropdown]);

  const closeHandler = useCallback(() => {
    setIsDropdown(false);
  }, []);

  const NavsCard: FC = () => (
    <NavsWrapper isMobile={isMobile}>
      <NavsLink to="/" onClick={closeHandler}>
        Home Page
      </NavsLink>
      <NavsLink to="/detail" onClick={closeHandler}>
        Event Detail Page
      </NavsLink>
    </NavsWrapper>
  );

  return (
    <>
      <Container>
        {!isTablet && !isMobile ? (
          <>
            <SocialWrapper>
              <Link to="/">
                <LogoImage src={Logo} alt="Logo" />
              </Link>
              <SocialWrap>
                <ExternalLink href="" target="_blank" mr="32px">
                  <Text fontSize={18} fontWeight={600}>
                    Hoe het werkt
                  </Text>
                </ExternalLink>
                <ExternalLink href="" target="_blank" mr="32px">
                  <Text fontSize={18} fontWeight={600}>
                    Word een partner
                  </Text>
                </ExternalLink>
                <Button onClick={() => clickHandler()}>Inloggen</Button>
              </SocialWrap>
            </SocialWrapper>
          </>
        ) : (
          <TabletWrapper>
            <SocialWrapper>
              <Link to="/" style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                <LogoImage src={Logo} alt="Logo" />
              </Link>
              {!isMobile && (
                <SocialWrap>
                  <ExternalLink href="" target="_blank" mr="20px">
                    <Text fontSize={16} fontWeight={600}>
                      Hoe het werkt
                    </Text>
                  </ExternalLink>
                  <ExternalLink href="" target="_blank" mr="20px">
                    <Text fontSize={16} fontWeight={600}>
                      Word een partner
                    </Text>
                  </ExternalLink>
                  <Button onClick={() => clickHandler()}>Inloggen</Button>
                </SocialWrap>
              )}
              {isMobile && (
                <MenuWrapper onClick={changeHandler}>
                  <Image src={Hamburger} width={40} height={40} alt="Menu" />
                </MenuWrapper>
              )}
            </SocialWrapper>

            {/* <Link to="/" mb="15px">
              <LogoImage src={Logo} alt="Logo" />
            </Link>
            <div>aaa</div>
            {!isMobile && <NavsCard />}
            <MobileWrapper>
              <SocialWrap>
                <ExternalLink
                  href="https://discord.com"
                  target="_blank"
                  mr={isMobile ? '20px' : '60px'}
                >
                  <Image src={Discord} width={60} height={60} alt="Discord" />
                </ExternalLink>
                <ExternalLink href="https://twitter.com" target="_blank">
                  <Image src={Twitter} width={60} height={60} alt="Twitter" />
                </ExternalLink>
              </SocialWrap>
              {!isMobile && (
                <Button onClick={connectHandler}>
                  {account ? abbreviateAddress(account) : 'Connect Wallet'}
                </Button>
              )}
              {isMobile && (
                <MenuWrapper onClick={changeHandler}>
                  <Image src={Hamburger} width={60} height={60} alt="Menu" />
                </MenuWrapper>
              )}
            </MobileWrapper> */}
          </TabletWrapper>
        )}
      </Container>
      {isDropdown && (
        <DropdownMenu>
          <MenuWrapper isMobile={isMobile} onClick={changeHandler}>
            <Image src={Close} width={60} height={60} alt="CloseIcon" />
          </MenuWrapper>
          <Button onClick={() => clickHandler()}>Inloggen</Button>
          <NavsCard />
        </DropdownMenu>
      )}
    </>
  );
};

export default Header;
