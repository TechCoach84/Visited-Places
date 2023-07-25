import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import FadeTransition from '../components/FadeTransition';
import {
  Flex,
  Image as BaseImage,
  Title,
  Content,
  ListItem,
  Wrapper,
  Wrap,
} from '../components/Toolkit';
import Footer from '../components/Footer';
import {
  RedTitle,
  GreenTitle,
  GreenSubTitle,
  OrangeSubTitle,
  VineImage,
} from '../components/Spacing';

import Hero from '../assets/images/hero_game.jpg';
import Vine03 from '../assets/images/vine03.png';
import Carousel1 from '../assets/images/carousel1.png';
import Carousel2 from '../assets/images/carousel2.png';
import Carousel3 from '../assets/images/carousel3.png';
import Carousel4 from '../assets/images/carousel4.png';
import Carousel5 from '../assets/images/carousel5.png';

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

const HeroWrap = styled.div`
  width: auto;
  position: absolute;
  top: 22px;

  ${({ theme }) => theme.mediaQueries.md} {
    top: 75px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    top: 220px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    top: 220px;
  }
`;

const Game: FC = () => {
  const [fadeImg, setFadeImg] = useState(Carousel1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      const index = count % 5;
      setIsVisible(true);
      setFadeImg([Carousel1, Carousel2, Carousel3, Carousel4, Carousel5][index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setIsVisible(false);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <Container>
      <HeroWrapper>
        <Image src={Hero} alt="Hero" />
        <HeroWrap>{isVisible && <FadeTransition img={fadeImg} />}</HeroWrap>
      </HeroWrapper>
      <Wrapper>
        {/* Crown */}
        <Wrap>
          <RedTitle>
            Where you shall find information on the Game mechanics and the Ant society
          </RedTitle>
          <VineImage src={Vine03} alt="Vine03" />
          <GreenTitle>Game Mechanics</GreenTitle>
          <GreenSubTitle>
            Play to Earn. Mint to Earn more.
            <br />
            Solve the Riddle of the Crown and become a Whale.
          </GreenSubTitle>
          <Content>
            The Quest is a string of mysteries, contests and challenges to complete. Each challenge
            comes with a prize and unlocks the following chapter of the storyline, culminating with
            the Riddle of the Crown and the Grand Prize, awarded to whomever solves it.
          </Content>
          <br />
          <Content>
            Some of the storyline challenges will take members to real world places, hence the
            necessity to organize in teams (Houses), and preferably with members scattered around
            the world.
          </Content>
          <br />
          <Content>
            All along the way, there will also be side contests, with benefits or cash prizes, in
            our native currency. The Riddle of the Crown is expected to last between 6 months and a
            year.
          </Content>
          <br />
          <Content>
            Starting at 1 ETH, the Grand Prize will accrue with each completed challenge and Minted
            Characters&rsquo; cumulative earnings, with the goal of becoming crypto&rsquo;s largest
            fiat prize pool in history.
          </Content>
          <br />
          <Content>
            Members may also mint special NFTs that give them weekly income streams in our native
            currency, in order to grab as much of it before supply runs dry. This currency will
            later give them community ranking and allow them to transact within the antsyAnts
            ecosystem.
          </Content>
          <br />
          <Content>
            Overall, as an early stage metaverse, Members can participate to collect NFTs, for the
            roleplay, for the prizes, but also to build a life on Méagann.
          </Content>
        </Wrap>
        {/* Narration */}
        <Wrap>
          <GreenTitle>Narration</GreenTitle>
          <Content>
            Every week, the official Twitter account releases chapters, which contain lore,
            information or clues relevant to the Quest. The Narrator is a mysterious character:
            &quot;the Blue Birds of the Mound, they who speak the World, Draziworika!&quot;
          </Content>
        </Wrap>
        {/* Minting */}
        <Wrap>
          <GreenTitle>Minting</GreenTitle>
          <Content>
            There will be several NFT minting campaigns, each with its income and purpose:
          </Content>
          <br />
          <ul>
            <ListItem>
              <Content>
                Members may mint &quot;Job&quot; NFTs. This is an unlimited supply NFT, granting its
                buyer &quot;gallAnt&quot; status and an income stream of 30 Dallors per week. In a
                single wallet, only a single &quot;Job&quot; NFT (plus one per Minted Character)
                will generate income. These NFTs are discounted at 0.02 ETH until First General
                Minting, and will be priced at 0.04 ETH thereafter.
              </Content>
            </ListItem>
            <br />
            <ListItem>
              <Content>
                &quot;House membership&quot; is an unlimited supply NFT, granting its buyer
                membership of a House, and official participation in its governance, budget
                allocation and in House events, and an income stream of 20 Dallors per week. Only
                one House NFT may be verified per wallet. All Minted characters in a single wallet
                are considered members of that House. These NFTs are also discounted at 0.02 ETH
                until First General Minting, and will be priced at 0.04 ETH thereafter.
              </Content>
            </ListItem>
            <br />
            <ListItem>
              <Content>
                &quot;relevAnt Whites&quot; are 100 characters, minted ahead of the general minting
                event. They have access to special features and abilities, and an exceptional income
                stream of 75 Dallors per week and may participate in exclusive content of the Quest
                and win its prizes. They can also have a &quot;Job&quot; NFT and cumulate the income
                streams. These are 0.1 ETH until First General Minting, and will be priced at 0.2
                ETH thereafter.
              </Content>
            </ListItem>
            <br />
            <ListItem>
              <Content>
                &quot;valiAnts&quot; are the Hero Characters Minted during the General Minting
                Event. At the first event, there are only 1000 available, with a White List of 200
                spots. These heroes earn an income stream of 50 Dallors per week and may participate
                in exclusive content of the Quest and win its prizes. They can also have a
                &quot;Job&quot; NFT and cumulate the income streams. These are 0.05 ETH until First
                General Minting, and will be priced at 0.1 ETH thereafter.
              </Content>
            </ListItem>
          </ul>
        </Wrap>
        {/* Economics */}
        <Wrap>
          <GreenTitle>Economics</GreenTitle>
          <OrangeSubTitle>Currency</OrangeSubTitle>
          <Content mb="30px">
            The colony uses a currency, the Dallor ($DUSx), for all cash prizes, incomes and trades.
            Members must earn or win as much of it before available supply dries out, at a secret
            point in the roadmap. In order to add the Dallor ($DUSx) currency to your Matic wallet,
            use this contract address: 0x1963e341FF5a75C41ca5Ac400c828E636B70546E.
          </Content>
          <OrangeSubTitle>Incomes</OrangeSubTitle>
          <Content>
            Beyond winning games and contests, members can earn a steady income via minting. Job
            NFTs, House memberships, characters and special features (relevAnt White, regular Ants
            and more to come), all these provide income streams. These streams should remain in
            place until a decision is made to list on an exchange.
          </Content>
          <br />
          <Content mb="30px">
            At certain times in the roadmap, ranking calls will give additional benefits to the best
            performing members (richest, best earners, etc.) and increase the value of the Grand
            Prize.
          </Content>
          <OrangeSubTitle>Tokenomics</OrangeSubTitle>
          <Content mb="30px">
            Currently, the Treasury supply sits at 1.21 billion tokens, with arbitrary burn and mint
            capacities, depending on initial needs. However many things will evolve with the
            community, and at a certain point in time, supply will dry up and it will start to burn,
            which is why it is best to grab as much of it early on.
          </Content>
          <OrangeSubTitle>Current Income Streams</OrangeSubTitle>
          <ul>
            <ListItem>
              <Content>Community appointed job: varies (20 Dallors / week)</Content>
            </ListItem>
            <ListItem>
              <Content>Basic Job NFT (gallAnt rank): 30 Dallors / week</Content>
            </ListItem>
            <ListItem>
              <Content>Basic House membership NFT: 20 Dallors / week</Content>
            </ListItem>
            <ListItem>
              <Content>Basic Ant NFT: 50 Dallors / week</Content>
            </ListItem>
            <ListItem>
              <Content>Relevant White NFT: 75 Dallors / week</Content>
            </ListItem>
            <ListItem>
              <Content>Starting House weekly budget: 500 Dallors / week</Content>
            </ListItem>
          </ul>
        </Wrap>
        {/* Society */}
        <Wrap>
          <GreenTitle>Society</GreenTitle>
          <Content>
            The Ants are a dedicated people, they’re dutiful and tireless. There are 3 social
            ladders: the Ants, or general population ; the &quot;gallAnts&quot; (Minted characters),
            a wealthier class ; and the relevAnts Whites (special Minted characters), which include
            leaders and important figures in various fields.
          </Content>
          <br />
          <Content>
            All Ants are workers, and all take turns helping in every field: construction, food
            gathering, administrative or or support functions. Only soldiers are single-task, though
            all may become soldiers in times of need. There is no need for wages, as the colony
            provides everyone with basic means of sustenance, and no respectable Ant would have it
            any other way.
          </Content>
          <br />
          <Content>However:</Content>
          <br />
          <ul>
            <ListItem>
              <Content>
                &quot;gallAnts&quot; have the joy and privilege of having an extra job, which gives
                them additional income (30 Dallors / week). In order to become a
                &quot;gallAnt&quot;, one must mint a job NFT, which are open to all;
              </Content>
            </ListItem>
            <br />
            <ListItem>
              <Content>
                and &quot;relevAnts Whites&quot; receive an allowance (75 Dallors / week) without
                needing the added work, it is just assumed that they do enough to earn it, though
                they may still have a job NFT on top of that. They also get access to exclusive
                in-game perks (clues, information, secrets, abilities). For now, the only way to
                become a rare &quot;relevAnt&quot;, is to mint a &quot;relevAnt White&quot; NFT. It
                is important to note that a &quot;relevAnt White&quot; NFT doesn&rsquo;t give its
                owner any special leading position within his House.
              </Content>
            </ListItem>
          </ul>
          <br />
          <Content>
            The Ants&rsquo; main passion is to engage in contests, challenges and other games, be
            they physical (skill, fights, racing), intellectual (quizzes, debates, board and card
            games) or pure luck (dice, lotteries, raffles). They also love to consume Soylent Blue,
            tablets made from honey Soylent Blue flowers which boost their abilities during such
            games.
          </Content>
          <br />
          <Content>
            It is important to note that following the disappearance of their Queen, the colony
            abandoned the capital in a quest to find her Crown. After generations of searching, they
            have little to no memory of anything prior to being on the road.
          </Content>
        </Wrap>
        {/* Houses */}
        <Wrap>
          <GreenTitle>Houses</GreenTitle>
          <Content mb="30px">
            There are 5 Houses, all similar in nature and in thought, but with actual differences.
          </Content>
          <OrangeSubTitle>Principles</OrangeSubTitle>
          <Content>
            Each House has its particularities, which give them bonuses or penalties. At first,
            these modifiers will only translate into gains modifiers according to the day of the
            week.
          </Content>
          <br />
          <Content>
            Also, each House receives a periodic budget from the Treasury, to spend completely as
            its members see fit. The more the Ants of a House earn money (from jobs, allowances,
            contests & games), the more their House receives from the Treasury as well.
          </Content>
          <br />
          <OrangeSubTitle>Jobs</OrangeSubTitle>
          <Content mb="30px">
            Jobs can be acquired in name by buying a &quot;Job&quot; NFT, or they can be awarded for
            service to the House (by House minted members) or community (by mods & admins):
            organizing events, stewarding their House (self-modding), creating content or art,
            &quot;spreading the faith&quot; (buzzing), etc. Once a House deems that a member is
            worthy enough to receive an income, they may request from Mods a free &quot;Job&quot;
            NFT, but not more than 1 per House, per week. More precise jobs will be added in time.
          </Content>
          <OrangeSubTitle>House Governance</OrangeSubTitle>
          <Content>
            Within each House, there can be any organizational structure that its minted members
            decide to have. Budget is entirely up to them, and they can spend it however they see
            fit: keep it in the House Treasury, split it amongst minted members, reserving it to buy
            boosts during contests, or buying job badges to distribute to worthy minted members.
          </Content>
        </Wrap>
        {/* Future Development */}
        <Wrap>
          <Title mb="30px" id="future-development">
            Future Development
          </Title>
          <OrangeSubTitle>DEX listing</OrangeSubTitle>
          <Content mb="30px">
            The Dallor token ($DUS), on the MATIC Blockchain, will not be listed on a Decentralized
            exchange until it reaches utility, ie when we open our first marketplace. Its initial
            exchange price will be determined in due time, but we hope to list it at US$1 price.
          </Content>
          <OrangeSubTitle>Income Streams</OrangeSubTitle>
          <Content mb="30px">
            antsyAnts uses Superfluid (superfluid.finance) for its automated income stream protocol.
            As time goes, we will implement our own dashboard and create one for every House to
            manage its budget.
          </Content>
          <OrangeSubTitle>NFT-tied income streams</OrangeSubTitle>
          <Content mb="30px">
            Our NFTs are on the Ethereum Blockchain, while the Dallor currency is on the Matic
            blockchain, in a SuperToken wrapper. We shall develop the tools necessary to improve the
            protocol so that whenever an NFT related to an income stream is sold or transferred, the
            income stream follows it to the destination wallet.
          </Content>
          <OrangeSubTitle>Governance</OrangeSubTitle>
          <Content mb="30px">
            antsyAnts is also an experiment in governance: each House self-determines its mode of
            governance, and will require its own community governance tech - be they DAOs,
            centralized, or libertarian multi-sig.
          </Content>
          <OrangeSubTitle>Marketplace</OrangeSubTitle>
          <Content>
            antsyAnts is a proto-metaverse: it&rsquo;s a metaverse in its early stages. To become
            fully functional, users will need a marketplace to trade in-game or IRL goods and
            services, and for this, they will need to be able to set up shops.
          </Content>
          <br />
          <Content>It is a big goal of ours to provide such a space.</Content>
        </Wrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};
export default Game;
