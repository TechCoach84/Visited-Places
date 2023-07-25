import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import Collapse from '../components/Collapse';
import {
  Flex,
  Image as BaseImage,
  Title,
  SubTitle,
  Content,
  ListItem,
  ExternalLink as BaseExternalLink,
  Wrapper,
  Wrap,
} from '../components/Toolkit';
import { RedContent, OrangeContent, VineImage } from '../components/Spacing';
import Footer from '../components/Footer';
import useMatchBreakpoints from '../hooks/useMatchBreakpoints';

import CNN from '../assets/images/cnn.jpg';
import Vine05 from '../assets/images/vine05.png';
import Matt from '../assets/images/matt.jpg';
import Fredric from '../assets/images/fredric.png';

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

const HeroTitle = styled(Title)`
  position: absolute;
  top: 22px;
  font-size: 48px;
  line-height: 58px;
  text-shadow: 4px 8px 4px rgba(0, 0, 0, 0.4);

  ${({ theme }) => theme.mediaQueries.md} {
    top: 75px;
    font-size: 96px;
    line-height: 115px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    top: 220px;
    font-size: 144px;
    line-height: 173px;
  }
`;

const ResponsiveImage = styled(BaseImage)`
  width: 100%;
  height: auto;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 578px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 600px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 800px;
  }
`;

const ExternalLink = styled(BaseExternalLink)`
  font-size: 16px;
  line-height: 1.3;
  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 22px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 24px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    font-size: 26px;
  }
`;

const ExternalLinkByUnderLink = styled(ExternalLink)`
  text-decoration: underline;
`;

const News: FC = () => {
  const { isXxl } = useMatchBreakpoints();
  const isSuper = !isXxl;

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://saurav.tech/NewsAPI/everything/cnn.json');
        const data = await res.json();
        setNews(data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 36000000);

    return () => clearInterval(interval);
  }, []);

  const CardSection = () => {
    return (
      <div>
        {news.map((article: any, index: number) => {
          return (
            <div key={index}>
              <DetailItem article={article} />
            </div>
          );
        })}
      </div>
    );
  };

  const DetailItem = ({ article }: any) => {
    return (
      <Wrap>
        <Title mb={isSuper ? '60px' : '120px'}>{article['title']}</Title>
        <img src={article['urlToImage']} alt="articleImage" />
        <ExternalLink href={article['url']} target="_blank">
          <Content>{article['content'].substring(0, 197)}...</Content>
        </ExternalLink>
        <br />
        <OrangeContent>{article['publishedAt'].substring(0, 10)}</OrangeContent>
        <SubTitle mt="20px" mb="10px">
          {article['author']}
        </SubTitle>
      </Wrap>
    );
  };

  return (
    <Container>
      <HeroWrapper>
        <Image src={CNN} alt="cnnImg" />
        <HeroTitle>CNN NEWS</HeroTitle>
      </HeroWrapper>
      <Wrapper>
        <CardSection />
        <Wrap>
          <Title mb={isSuper ? '60px' : '120px'}>
            More on the project, the technology, the inspirations and our Founder
          </Title>
          <VineImage src={Vine05} alt="Vine05" />
          <Title mb="60px">antsyAnts FAQ</Title>
          <SubTitle mb="60px">What you may want to know about the project</SubTitle>
          <Collapse
            title={"What's antsyAnts about?"}
            value={
              'antsyAnts is the story of an Ant colony set in the rich fantasy world of Méagann. After the loss of their Queen, the Ants are on a Quest to find her Crown, in order to restore harmony to the colony.\n\nantsyAnts is the  birth of a world in itself, a PFP collection complete with its currency, setting, culture, lore and adventure, diving into governance and economics, all in the goal of becoming a singular metaverse. Members can participate to collect NFTs, for the roleplay, for the prizes or even to build a life on Méagann.\n\nIt is also the first "all-photographic random generative PFP NFT Collection", where all graphic elements used were taken from actual photographs.'
            }
          />
          <Collapse
            title={'What will be minted?'}
            value={
              'Ant Island needs 1,000 valiAnt heroes for the Quest, and 100 relevAnt Whites characters, with unique features and abilities. As the story progresses, more minting events will allow for more members to obtain a character.\n\nAdditionally, special mintings will be available, to enrich the players’ experience of the Méagann metaverse, increase their incomes, unlock features, reveal clues or to simply take the story to the next chapter.'
            }
          />
          <Collapse title={'What are the technical details?'}>
            <Content>
              All our NFTs are on the Ethereum Blockchain and all minting events will take place on
              this website only. The Dallor currency is on the Matic Blockchain. Until the First
              &quot;valiAnt&quot; General Minting, all NFTs are at half price.
            </Content>
            <br />
            <ul>
              <ListItem>
                <Content>
                  Early minting of 100 &quot;relevAnt Whites&quot;: 100 special characters at 0.2
                  ETH (early price: 0.1 ETH) each.
                </Content>
              </ListItem>
              <ListItem>
                <Content>
                  General Minting of 1,000 &quot;valiAnt&quot; Hero characters at 0.1 ETH each.
                  (early price: 0.05 ETH)
                </Content>
              </ListItem>
              <ListItem>
                <Content>These characters earn a weekly revenue in Dallors.</Content>
              </ListItem>
            </ul>
            <br />
            <OrangeContent>
              Other Mintings bring additional revenue or benefits, for 0.04 ETH and up.
            </OrangeContent>
          </Collapse>
          <Collapse id="practical-questions" title={'Practical questions'} isLast>
            <Content>
              Buying Crypto: <br />
              <ExternalLink
                href="https://accounts.binance.com/en/register?ref=AKU2FXV5"
                target="_blank"
              >
                https://accounts.binance.com/en/register?ref=AKU2FXV5
              </ExternalLink>
            </Content>
            <br />
            <Content>
              Setting up a Metamask Wallet: <br />
              <ExternalLink
                href="https://academy.binance.com/en/articles/how-to-use-metamask"
                target="_blank"
              >
                https://academy.binance.com/en/articles/how-to-use-metamask
              </ExternalLink>
            </Content>
            <br />
            <Content>
              Setting up a Matic Wallet on Metamask:
              <br />
              <ExternalLink
                href="https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844"
                target="_blank"
              >
                https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844
              </ExternalLink>
            </Content>
            <br />
            <Content>
              Adding Dallor ($DUSx) token to Metamask: Click on “Import Tokens”, and paste this
              contract address: 0x1963e341FF5a75C41ca5Ac400c828E636B70546E
            </Content>
            <br />
            <Content>
              <Content>“Bridging” between ETH & Matic Blockchains:</Content>
              <ExternalLink
                href="https://consensys.net/blog/metamask/how-to-bridge-tokens-from-ethereum-to-polygon-with-metamask/"
                target="_blank"
              >
                https://consensys.net/blog/metamask/how-to-bridge-tokens-from-ethereum-to-polygon-with-metamask/
              </ExternalLink>
            </Content>
            <br />
            <OrangeContent>
              <Content>Storing Cryptos & NFTs - always use a hardware wallet:</Content>
              <ExternalLink href="https://www.ledger.com/" target="_blank">
                https://www.ledger.com/
              </ExternalLink>
              <br />
              <ExternalLink href="https://trezor.io/" target="_blank">
                https://trezor.io/
              </ExternalLink>
            </OrangeContent>
          </Collapse>
        </Wrap>
        {/* Blockchain FAQ */}
        <>
          <Title mb="60px">Blockchain FAQ</Title>
          <SubTitle mb="60px">Bitcoin, Crypto and NFTs: the elevator pitches</SubTitle>
          <Collapse
            title={'Bitcoin & Blockchain'}
            value={
              'On your computer, you have photos, music, videos, documents, that you can copy, paste, share, download or edit as you want.\n\nBitcoin is the first digital element in history that you can have that can’t be modified, forged or duplicated, by you or anyone else. What you have, only you have, and only you control.\n\nHow is it possible? Because Bitcoin works with Blockchain. Everyone can see what you have and do with your wallet, just like you can see what everyone else has and does with theirs. No one can cheat, however everyone’s identity is hidden by a wallet number.\n\nSince no one can forge or alter Bitcoin, its first logical use is money.'
            }
          />
          <Collapse
            title={'Crypto'}
            value={
              'See Bitcoin above. Except Cryptos are (mostly) used to pay for specific goods or services: airline miles, hotel and rental rewards, casino chips, grocery coupons, arcade tokens, etc.\n\nJust like Bitcoin, they only appear as numbers. Spending 1 subtracts 1 from your total.'
            }
          />
          <Collapse
            title={'NFTs'}
            value={
              "See Bitcoin above. Except in this version, each single unit you own is unique. In a stack of napkins, all napkins have the same value, they are fungible. But a napkin with an autograph on it becomes unique, different from other napkins. It’s non-fungible.\n\nUnlike Bitcoin, you don't count those. You either have the right one or you don't."
            }
          />
          <Collapse
            title={'Why?'}
            value={
              'Our future is digital. Just like cash, all goods and services will eventually become digital. When this happens, he who holds your account will hold your life in the palm of his hand, and be able modify or cancel it in a flick of a switch. Yes, everything: your money, belongings, IDs, contacts, messages, documents.\n\nBitcoin, Blockchain, Cryptos and NFTs aim to give digital control to individuals first, before someone else takes full control.'
            }
            isLast
          />
        </>

        {/* Matt Doogue */}
        <>
          <Title mb="60px">Matt Doogue</Title>
          <SubTitle mb="60px">Biography of the original Ant Photographer</SubTitle>
          <Content>
            Matt Doogue is an award winning photographer living in Scotland. He&apos;s a keen
            conservationist, tour leader/holiday guide, ambassador for Vanguard UK, outreach
            teacher, competition judge and all out wildlife fanatic. A photographer of 7 years,
            He&apos;s already been published in all of the UK&apos;s top photography magazines, with
            features and interviews in BBC Earth, Canon, National Geographic and more.
          </Content>
          <br />
          <Content>
            On his personal time, he often visits schools to educate children on natural
            conservancy, climate breakdown, wildlife decline, habitat loss and ways in which all can
            help. As a long term sufferer of Mental Health related illnesses, he also promotes
            Mental Health awareness, through club talks and presentations.
          </Content>
          <br />
          <Content>About the image</Content>
          <br />
          <Content mb="60px">
            &quot;Ace the Ant was a photo that I&apos;d shot in my Garden. I noticed the Ant
            stranded on a petal in the bird bath. It took hundreds of photos to capture the ant in
            the perfect spot. This photo later went on to win wildlife photographer of the year in
            the nature round and was also copyright infringed by National Geographic Italy.&quot;
            <br />
            <Content>
              <ExternalLinkByUnderLink
                href="https://foundation.app/@MattsMacro/~/91515"
                target="_blank"
              >
                https://foundation.app/@MattsMacro/~/91515
              </ExternalLinkByUnderLink>
            </Content>
            <br />
            &quot;Same Storm, Different Boats&quot; Now copyrights-free thanks to{' '}
            <ExternalLinkByUnderLink href="https://twitter.com/punk6529" target="_blank">
              @punk6529
            </ExternalLinkByUnderLink>{' '}
            and{' '}
            <ExternalLinkByUnderLink
              href="https://opensea.io/assets/0x3b3ee1931dc30c1957379fac9aba94d1c48a5405/91515"
              target="_blank"
            >
              6529Museum
            </ExternalLinkByUnderLink>
            .
          </Content>
          <ResponsiveImage src={Matt} alt="Matt" />
        </>

        {/* Frederic Meyer */}
        <Wrap>
          <Title mb="60px">Frederic Meyer</Title>
          <SubTitle mb="60px" id="founder">
            antsyAnts Founder
          </SubTitle>
          <RedContent>
            Frederic Meyer is a 46 year-old tech consultant and multi-startup cofounder. A French
            national born in Lebanon, raised in a handful of far reaching countries, he first heard
            about Bitcoin in 2012, but only dived in it in 2016. He immediately got involved and
            within 2 years, was teaching it to institutionals as well as advising an investment
            fund.
            <br />
            <Content>
              On Bitcoin, he says “to me, what is exceptional is the real expanse of innovation that
              it has opened. The internet disrupted many industries, Bitcoin has the power to
              disrupt social establishments and redistribute the cards.” Most importantly, he is
              deeply attached to the idea of owning one’s data and digital life just as well as
              owning a toothbrush (more on that at a later date).
            </Content>
            <br />
            <Content>
              A big fan of roleplaying in his youth, he turned his back on video gaming “because it
              always felt like it was biting chunks of my time, leaving me with nothing but grief
              after finishing a game. NFTs completely change that. With them, playing can become
              productive. I can’t wait to experiment with incentivized, multi-platform environments
              and model proto-societies that translate into real world benefits. And why not have
              fun on the way?”
            </Content>
            <br />
            In his own words, antsyAnts is the introduction phase to a multi dimensional project,
            with immeasurable potential outcomes.
          </RedContent>
          <ResponsiveImage src={Fredric} alt="Fredric" />
        </Wrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default News;
