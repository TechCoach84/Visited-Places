import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  Flex,
  Image as BaseImage,
  Content,
  ListItem,
  Wrapper,
  RedWrap,
} from '../components/Toolkit';
import {
  RedTitle,
  GreenTitle,
  GreenSubTitle,
  OrangeSubTitle as BaseOrangeSubTitle,
  GreenContent,
  OrangeContent,
  RedContent,
  VineImage,
} from '../components/Spacing';
import Footer from '../components/Footer';
import { RootState } from '../redux/types';
import { connectFailed } from '../redux/actions';

import Hero from '../assets/images/hero_account.jpg';
import Vine06 from '../assets/images/vine06.png';
import EtherScan from '../assets/images/scan-ether.png';
import PolygonScan from '../assets/images/scan-polygon.png';
import PlaceholderAnt from '../assets/images/placeholderAnt.png';
import House from '../assets/images/house.png';
import Wagmi from '../assets/images/wagmi.png';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding-top: 248px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 343px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 260px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-top: 292px;
  }
`;

const HeroWrapper = styled(Flex)`
  position: relative;
`;

const Image = styled(BaseImage)`
  width: 100%;
`;

const RightContent = styled(Content)`
  text-align: right;
`;

const ScanCardContainer = styled(Flex)`
  flex-direction: column;
  width: 177px;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 400px;
  }
`;

const ScanImage = styled(BaseImage)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 60px;
    height: 60px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 80px;
    height: 80px;
  }
`;

const WrapperForPlaceholder = styled(Wrapper)`
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 0 200px;
  }
`;

const PlacecardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 40px;
  row-gap: 20px;
  margin-bottom: 60px;

  ${({ theme }) => theme.mediaQueries.md} {
    row-gap: 30px;
    margin-bottom: 90px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    column-gap: 40px;
    row-gap: 60px;
    margin-bottom: 120px;
  }
`;

const PlaceholderWrapper = styled(Flex)`
  align-items: flex-start;
`;

const PlaceholderWrap = styled.div`
  width: auto;
  margin-right: 30px;
`;

const PlaceholderImage = styled(BaseImage)`
  width: 150px;
  height: 150px;
  margin-bottom: 15px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 250px;
    height: 250px;
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 350px;
    height: 350px;
    margin-bottom: 30px;
  }
`;

const HouseImage = styled(BaseImage)`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 380px;
    height: 380px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 600px;
    height: 600px;
    margin-bottom: 60px;
  }
`;

const WagmiImage = styled(BaseImage)`
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 354px;
    height: 354px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 578px;
    height: 578px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 600px;
    height: 600px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 800px;
    height: 800px;
  }
`;

const OrangeSubTitle = styled(BaseOrangeSubTitle)`
  text-align: center;
`;

interface ScanCardProps {
  title: string;
  img: string;
  account: string;
  link: string;
}

const ScanCard: FC<ScanCardProps> = ({ title, img, account, link }) => {
  const dispatch = useDispatch();

  const scanHandler = useCallback(() => {
    if (!account) {
      dispatch(connectFailed('Please connect a wallet!'));
      return;
    }
    window.location.href = `${link}/${account}`;
  }, [account, dispatch, link]);

  return (
    <ScanCardContainer>
      <OrangeContent>{title}</OrangeContent>
      <ScanImage src={img} alt="CryptoScan" onClick={scanHandler} />
    </ScanCardContainer>
  );
};

const PlaceholderCard = () => (
  <PlaceholderWrapper>
    <PlaceholderWrap>
      <PlaceholderImage src={PlaceholderAnt} alt="Placeholder" />
      <Content>Ant #</Content>
    </PlaceholderWrap>
    <Content>
      Income - ...
      <br />
      <br />
      Scores:
      <br />
      Battle - ...
      <br />
      Dream - ...
      <br />
      Knowledge - ...
      <br />
      Life - ...
      <br />
      Luck - ...
    </Content>
  </PlaceholderWrapper>
);

const Account: FC = () => {
  const { account } = useSelector((state: RootState) => state);

  return (
    <Container>
      <HeroWrapper>
        <Image src={Hero} alt="Hero" />
      </HeroWrapper>
      <RightContent mt="15px" mr="30px">
        Fan art, original image © Universal Pictures
      </RightContent>
      <Wrapper>
        {/* Crown */}
        <RedWrap>
          <RedTitle>
            Your Money. Your House. Your Assets. Your Jobs.
            <br />
            <br />
            ...Your Life. Own them all now.
          </RedTitle>
          <VineImage src={Vine06} alt="Vine06" />
          <GreenSubTitle>View your wallet</GreenSubTitle>
          <Flex>
            <ScanCard
              title="Ether"
              img={EtherScan}
              account={account}
              link="https://etherscan.io/address"
            />
            <ScanCard
              title="Polygon"
              img={PolygonScan}
              account={account}
              link="https://polygonscan.com/address"
            />
          </Flex>
        </RedWrap>
        {/* Your Assets */}
        <RedWrap>
          <GreenTitle>Your Assets</GreenTitle>
          <OrangeSubTitle>Balance: 0.00000000 Dallors</OrangeSubTitle>
          <OrangeSubTitle>Weekly Income: 0 Dallors</OrangeSubTitle>
          <RedContent>
            For currency balance, please switch to the Polygon (Matic) network on your Metamask.
            <br />
            <br />
            What you can do with your Dallors at this stage
            <ul>
              <ListItem>
                <Content>Trading between peers</Content>
              </ListItem>
              <ListItem>
                <Content>Purchasing goods and services</Content>
              </ListItem>
            </ul>
          </RedContent>
          <div>
            <GreenSubTitle>Your House</GreenSubTitle>
            <HouseImage src={House} alt="House" />
            <GreenSubTitle>House...</GreenSubTitle>
            <RedContent>
              Description:
              <br />
              You have no House for the moment!
            </RedContent>
          </div>
          <GreenSubTitle>Your antsyAnts NFTs</GreenSubTitle>
          <GreenContent>
            For NFT collection, please switch to the Ethereum network on your Metamask.
          </GreenContent>
        </RedWrap>
      </Wrapper>
      <WrapperForPlaceholder>
        <PlacecardContainer>
          <PlaceholderCard />
          <PlaceholderCard />
          <PlaceholderCard />
        </PlacecardContainer>
      </WrapperForPlaceholder>
      <Wrapper>
        <WagmiImage src={Wagmi} alt="Wagmi" />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Account;
