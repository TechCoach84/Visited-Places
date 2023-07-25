import React, { FC } from 'react';
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
} from '../components/Toolkit';
import Footer from '../components/Footer';
import { SearchField } from '../components/SearchField';
import CustomField from '../components/CustomField';
import PlayItem from '../components/PlayItem';
import { RedContent, VineImage } from '../components/Spacing';
import useMatchBreakpoints from '../hooks/useMatchBreakpoints';

import Hero from '../assets/images/hero_home.png';
import Vine01 from '../assets/images/vine01.png';
import Discord from '../assets/images/discord.png';
import Twitter from '../assets/images/twitter.png';
import NFT from '../assets/images/nft.jpg';
import Currency from '../assets/images/currency.png';
import Roadmap from '../assets/images/roadmap.jpg';
import Ant from '../assets/images/ant.png';

import Armsterdam_icon from '../assets/images/armsterdam.svg';
import lotterdam_icon from '../assets/images/lotterdam.svg';
import vandaag_icon from '../assets/images/vandaag.svg';
import ditweekend_icon from '../assets/images/ditweekend.svg';
import kiesdatum_icon from '../assets/images/kiesdatum.svg';
import charlee_img from '../assets/images/charlee.svg';
import happyfeeling_img from '../assets/images/happyfeeling.svg';

const MainWrapper = styled.div``;

const MainSection = styled.div`
  background-image: url(${Hero});
  background-size: cover;
  height: 407px;
  ${({ theme }) => theme.mediaQueries.md} {
    height: 550px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    height: 590px;
  }
`;

const MainContent = styled.div`
  padding-top: 135px;
  padding-bottom: 30px;

  font-size: 32px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -1px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 170px;
    font-size: 48px;
    line-height: 56px;
    padding-bottom: 40px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 200px;
    font-size: 64px;
    line-height: 72px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-top: 200px;
    font-size: 64px;
    line-height: 72px;
  }
`;

const Section = styled.div`
  margin-top: 30px;
  width: calc(100% - 48px);
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    width: 634px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 800px;
  }
`;

const SubSection = styled.div`
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 634px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 800px;
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.primary};
`;

const LargeTitle = styled.div`
  font-family: Public Sans;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;

  margin-bottom: 24px;
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 634px;
    font-size: 22px;
    line-height: 36px;
    letter-spacing: -1px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 800px;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -1px;
  }
`;

const Box = styled.div`
  height: 120px;
  gap: 24px;
  display: flex;
  width: calc(100% - 48px);
  margin-left: auto;
  margin-right: auto;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 634px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: 800px;
  }
  & .boxStyle {
    min-width: calc(33.33% - 16px);
    min-height: 70px;
    padding-top: 20px;
    ${({ theme }) => theme.mediaQueries.md} {
      min-width: 195px;
      min-height: 100px;
      padding-top: 25px;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      min-width: 250.67px;
      min-height: 120px;
      padding-top: 25px;
    }
  }
`;

const DateSelection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;
  & p {
    width: fit-content;
    font-family: Public Sans;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.5px;
    text-align: left;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.5px;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      font-size: 22px;
      line-height: 26px;
      letter-spacing: -0.5px;
    }
  }
  & b {
    width: fit-content;
    font-family: Public Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: right;
    ${({ theme }) => theme.mediaQueries.md} {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      font-size: 18px;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }
`;

const Image = styled(BaseImage)`
  width: 100%;
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

const SocialImage = styled(BaseImage)`
  width: 90px;
  height: 90px;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 120px;
    height: 120px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 140px;
    height: 140px;
  }
`;

const SocialCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.md} {
    width: 229px;
    margin: 0 15px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 274px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 289px;
  }
`;

const LeftSubTitle = styled(SubTitle)`
  text-align: left;
`;

const CenterContent = styled(Content)`
  text-align: center;
`;

const RedContentCenter = styled(RedContent)`
  text-align: center;
`;

interface SocialCardProps {
  href: string;
  title: string;
  img: string;
}

const SocialCard: FC<SocialCardProps> = ({ href, title, img }) => (
  <SocialCardContainer>
    <Content mb="60px">{title}</Content>
    <ExternalLink href={href} target="_blank">
      <SocialImage src={img} alt="Social" />
    </ExternalLink>
  </SocialCardContainer>
);

const Home: FC = () => {
  const { isXxl } = useMatchBreakpoints();
  const isMobile = !isXxl;

  const MetaData = [
    {
      image: Armsterdam_icon,
      content: 'Amsterdam',
    },
    {
      image: lotterdam_icon,
      content: 'Rotterdam',
    },
  ];

  const BoxData = [
    {
      image: vandaag_icon,
      content: 'Vandaag',
    },
    {
      image: ditweekend_icon,
      content: 'Dit weekend',
    },
    {
      image: kiesdatum_icon,
      content: 'Kies datum',
    },
  ];

  const PlayItemData = [
    {
      week: 'Donderdag',
      date: '8 juni',
      mainevents: [
        {
          image: charlee_img,
          title: 'Charlee 23:00',
          subtitle: 'Lovelee, Amsterdam',
          numbers: 21,
          tooltip: 'Gastenlijst',
        },
        {
          image: charlee_img,
          title: 'Freaky 23:00',
          subtitle: 'Supperclub, Amsterdam',
          numbers: 18,
          tooltip: 'Gastenlijst',
        },
        {
          image: charlee_img,
          title: 'Mimi 23:00',
          subtitle: 'Chin Chin, Amsterdam',
          numbers: 21,
          tooltip: 'Gastenlijst',
        },
        {
          image: charlee_img,
          title: 'Super Social 23:00',
          subtitle: 'Chicago Social Club, Amsterdam',
          numbers: 21,
          tooltip: 'Vriendenticket',
        },
      ],
    },
    {
      week: 'Vrijdag',
      date: '9 juni',
      mainevents: [
        {
          image: happyfeeling_img,
          title: 'Happy feelings 16:00',
          subtitle: 'Thuishaven, Amsterdam',
          numbers: 18,
          tooltip: 'Gastenlijst',
        },
      ],
    },
    {
      week: 'Zaterdag',
      date: '10 juni',
      mainevents: [
        {
          image: happyfeeling_img,
          title: 'Happy feelings 16:00',
          subtitle: 'Thuishaven, Amsterdam',
          numbers: 18,
          tooltip: 'Gastenlijst',
        },
      ],
    },
  ];

  return (
    <MainWrapper>
      <MainSection>
        <MainContent>
          Gastenlijst
          <br />
          Amsterdam
        </MainContent>
        <SearchField />
        <Section>
          {MetaData.map((item, index) => {
            return (
              <CustomField image={item.image} content={item.content} key={index} marginRight={20} />
            );
          })}
        </Section>
      </MainSection>
      <Container>
        <Wrapper>
          {/* Zoek evenementen */}
          <Wrap>
            <LargeTitle>Zoek evenementen</LargeTitle>
            <Box>
              {BoxData.map((item, index) => {
                return (
                  <CustomField
                    image={item.image}
                    content={item.content}
                    key={index}
                    style={{
                      background: '#262123',
                    }}
                    className="boxStyle"
                  />
                );
              })}
            </Box>
            <SubSection>
              {PlayItemData.map((item, index) => {
                return (
                  <div key={index}>
                    <DateSelection>
                      <p>{item.week}</p>
                      <b>{item.date}</b>
                    </DateSelection>
                    {item.mainevents &&
                      item.mainevents.map((category, indices) => {
                        return (
                          <PlayItem
                            image={category.image}
                            title={category.title}
                            subtitle={category.subtitle}
                            numbers={category.numbers}
                            tooltip={category.tooltip}
                            key={indices}
                          />
                        );
                      })}
                  </div>
                );
              })}
            </SubSection>

            {/* <SubTitle mb={isMobile ? '60px' : '120px'}>
              The year is 6529. The Ants of Ant Island are on a Quest to find the Lost Crown of
              their Queen. But first, the 5 Houses must recruit 1,000 heroes to solve its Riddle
              before the year’s end.
              <br />
              <br />
              Will the heroes be found?
            </SubTitle>
            <VineImage src={Vine01} height={200} mb={isMobile ? '60px' : '120px'} alt="Vine01" />
            <Title mb="60px">Welcome to Méagann, traveler!</Title>
            <SubTitle mb="60px">
              Money, Art, Adventure, Politics, find them all here!
              <br />
              Look for answers, search for clues, grab the money, game the system and find fortune
              and freedom!
              <br />
              But beware, as things aren’t always as they seem...
              <br />
              <br />
              ... let the game begin!
            </SubTitle>
            <RedContent>
              <Content>
                antsyAnts is a total NFT experience, complete with setting, culture, society and
                currency ; it is the birth of a world in the metaverse. Rich in lore, adventure and
                quests, it dives into finance, governance, economics and other foundations of a
                society, set in the fantasy world of Méagann.
              </Content>
              <br />
              <Content>
                With 100% original art, it is also the first &quot;all-photographic random
                generative NFT PFP Collection&quot;, and to provide assurances, our founder is fully{' '}
                <HashLink to="/about#founder">doxxed</HashLink>.
              </Content>
            </RedContent>
            <Flex>
              <SocialCard href="https://discord.com/" title="Join on Discord" img={Discord} />
              <SocialCard
                href="https://mobile.twitter.com/"
                title="Follow on Twitter"
                img={Twitter}
              />
            </Flex> */}
          </Wrap>
          {/* Mechanics */}
          {/* <Wrap>
            <Title mb="60px">Mechanics</Title>
            <LeftSubTitle mb="30px">Rob the Bank!</LeftSubTitle>
            <Content>
              In our metaverse, everything will be paid for in our native currency, the Dallor
              ($DUS, DEX listing coming). Distribution will be initially generous, then slow down
              with each minting event, and finally supply will dry out and begin to burn at a secret
              point of the Quest’s storyline.
            </Content>
            <br />
            <Content>
              Greater payouts come with minting income generating (auto-staking) NFTs, completing
              the tasks of the Quest (both online and in real life), and participating in community
              games, challenges and activities.
              <br />
              <br />
              Take it all and give nothing back!
            </Content>
            <br />
            <Content mb="30px">
              For more information on setting up a Matic Wallet in your Metamask, please see our{' '}
              <HashLink to="/about#practical-questions">Practical Questions</HashLink> section.
            </Content>
            <LeftSubTitle mb="30px">Crack the Riddle and win the Grand Prize!</LeftSubTitle>
            <Content mb="60px">
              A Grand Prize will be awarded to the person or team that solves the Riddle of the
              Crown. Starting at 1 ETH, the Grand Prize will accrue vastly over time via several
              streams.
              <br />
              <br />
              Get ready for the largest fiat prize ever awarded in crypto history!
            </Content>
            <LeftSubTitle mb="30px">Enter the Metaverse and make History!</LeftSubTitle>
            <RedContent>
              You&rsquo;ve heard of it, but don&rsquo;t know where to begin: with Méagann, enter the
              Metaverse and build a digital life of your own, with business, housing, commerce,
              politics, economics! Are you tired of the &quot;system&quot;? Put your ideas to the
              test and compete with others to change the world!
            </RedContent>
            <ResponsiveImage src={Currency} mb="60px" alt="Currency" />
          </Wrap> */}
          {/* Mint */}
          {/* <Wrap>
            <Title mb="60px">Minting</Title>
            <Content>
              There are a number of NFTs to mint, to obtain different features and advantages, for
              more details on Mintings and currency, please visit the{' '}
              <HashLink to="/game">GAME</HashLink> page. All mintings are on the Ethereum
              Blockchain. Up to the first General &quot;valiAnt&quot; Character Minting Event, all
              NFTs are at a discount price, so load up before they go up!
            </Content>
            <br />
            <Content>
              Once the community solves the first step of the Riddle, two Character minting events
              will occur. Character NFTs get access to high-reward exclusive challenges related to
              the storyline. Sequence goes as follows:
            </Content>
            <br />
            <ul>
              <ListItem>
                <Content>
                  &quot;Job&quot; NFTs, which provide a steady weekly income (auto-stake) in Dallors
                  and grant business advantages.
                </Content>
                <Content>Early price: 0.02 ETH / Later price: 0.04 ETH</Content>
              </ListItem>
              <br />
              <ListItem>
                <Content>
                  &quot;House membership&quot; NFTs, which also provide an income, and grant
                  governance privileges.
                </Content>
                <Content>Early price: 0.02 ETH / Later price: 0.04 ETH</Content>
              </ListItem>
              <br />
              <ListItem>
                <Content>
                  100 &quot;relevAnt White&quot; NFTs, early mints Characters with special
                  attributes and high income.
                </Content>
                <Content>Early price: 0.1 ETH / Later price: 0.2 ETH</Content>
              </ListItem>
              <br />
              <ListItem>
                <Content>
                  1,000 &quot;valiAnt&quot; Characters, heroes with special income and privileges.
                </Content>
                <Content>Early price: 0.05 ETH / Later price: 0.1 ETH</Content>
              </ListItem>
            </ul>
            <br />
            <Content mb="30px">
              As the storyline progresses, a number of other items or attributes will be available
              for minting.
            </Content>
            <ResponsiveImage src={NFT} mb="120px" alt="NFT" />
          </Wrap> */}
          {/* Roadmap */}
          {/* <>
            <Title mb="60px" id="roadmap">
              Roadmap
            </Title>
            <ResponsiveImage src={Roadmap} mb="60px" alt="Roadmap" />
            <CenterContent mb="60px">
              See&nbsp;
              <HashLink to="game#future-development">Future Development</HashLink> to learn more !
            </CenterContent>
            <RedContentCenter>
              For more information, please go to our&nbsp;
              <HashLink to="/about">ABOUT</HashLink> page.
            </RedContentCenter>
            <ResponsiveImage src={Ant} alt="Ant" />
          </> */}
        </Wrapper>
        {/* <Footer /> */}
      </Container>
    </MainWrapper>
  );
};

export default Home;
