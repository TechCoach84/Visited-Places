import { FC } from 'react';
import styled from 'styled-components';
import Collapse from '../components/Collapse';
import { Flex, Image as BaseImage, Title, Content, Wrapper, Wrap } from '../components/Toolkit';
import { RedTitle, OrangeSubTitle, GreenContent, VineImage } from '../components/Spacing';
import Footer from '../components/Footer';

import Hero from '../assets/images/hero_lore.jpg';
import Vine04 from '../assets/images/vine04.png';

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

const Lore: FC = () => (
  <Container>
    <HeroWrapper>
      <Image src={Hero} alt="Hero" />
      <HeroTitle>LORE</HeroTitle>
    </HeroWrapper>
    <Wrapper>
      <Wrap>
        <RedTitle>
          Welcome to the fascinating World of Méagann, as narrated by the Blue Birds of the Mound,
          they who speak the World, Draziworika!
        </RedTitle>
        <VineImage src={Vine04} alt="Vine04" />
        <Title mb="60px">The 5 types of Speaks</Title>
        <OrangeSubTitle>Chronicles</OrangeSubTitle>
        <GreenContent>
          Only ever once, the Ants left their capital Anthill, and set out to find the Crown of the
          Queen. This is their Chronicle.
        </GreenContent>
        <OrangeSubTitle>Visions</OrangeSubTitle>
        <GreenContent>
          House radiAnt can sometimes see things far and away. Making sense of them is often harder
          than going to check on those visions.
        </GreenContent>
        <OrangeSubTitle>Méagannica</OrangeSubTitle>
        <GreenContent>
          Excerpts from the Book of the Orelten in Ethenbar Seal-City, describing the World and its
          mysteries, Dragons and Ûmorgar, and other fun things.
        </GreenContent>
        <OrangeSubTitle>Words & Sayings</OrangeSubTitle>
        <GreenContent>
          Wise words heard on the paths to glory, the roads to prosperity, and in a few brothels and
          cutthroats.
        </GreenContent>
        <OrangeSubTitle>Sights</OrangeSubTitle>
        <Content>
          The Works of the Fine, artists extraordinaire, who have never surpassed themselves better
          than while being intoxicated.
        </Content>
      </Wrap>
      {/* The speaks */}
      <Wrap>
        <Title mb="30px">The Speaks</Title>
        <Collapse
          title={'Chapter 1 - Chronicle\nThe Riddle of the Crown'}
          value={
            "The year is 6529.\n\nFor most creatures of the world, it is ages ago that Alea the First, Queen of Ants, vanished in the morning fog, never to be seen again. For Ants however, it might as well have been yesterday, for they never ceased to search for their beloved Queen.\n\nAll that remained of her was a poem, a short riddle so simple yet unsolved, and it set her people on a quest, for only when they would find her crown, would they know peace and harmony. It obsessed them, and after years of searching, they had finally reached destination.\n\nAnt Island, as it is now named, isn't the most hospitable of islands, but it has everything they need. There are mountains and ridges, valleys and gorges, rivers and glaciers, and above all, it sits close enough to the mainland to allow trading for missing resources.\nFor a few generations, the colony has been settling on its grounds. There was now a need for the Five Houses to gather and choose between themselves 1 000 heroes to complete the next step of the riddle before the year turns 6530.\n\nWill our heroes be found?"
          }
        />
        <Collapse
          title={'Chapter 2 - Chronicle\nThe Gods are dead'}
          value={
            'Méagann is a peculiar world: it has no Gods. Not that there never were any, mind you, but in the year 4508, there had been a strange event, and all Gods had suddenly disappeared, and with them, all faiths, aspirations and dreams.\n\nIt took a long time for people to learn hope again. And once they did, they would exclusively feed particular interests or needs, and only with invention and innovation, spewing random technological advances, while leaving other things that worked well... well, as they were.\n\nThis has given birth to cities where progress runs amok like a headless chicken, like where one needs a rock to crank the wheel that powers up a quantum supercomputer (true story). Each city had a dream matter, its eyes on stars or sands, its mind on vocabulary or velocity.\n\nFor the Ants of Ant Island, it was all about finding the Crown of their Queen.\n\nFor this purpose, the colony had split into 5 Houses: the giAnts, the ululAnts, the savAnts, the defiAnts and the radiAnts. And then there were the Poison Few, who are few, but are they really poison?'
          }
        />
        <Collapse
          title={'Chapter 3 - Chronicle\nThe Houses of Ant Island'}
          value={
            "The Houses of Ant Island are not divided by function, social status or racial traits. In fact, all Ants of all Houses dress, act and think like any other Ant of any House. The differences came from their role within the colony, back when it was on the move.\n\nNeedless to say, this is a rather obsolete distinction, but Ants aren't ones to forego duty and order when they can be so enjoyed. Only the Poison Few lacked the most common dignity to know their place in the caravan, but no one can affirm who they are or if they still exist.\n\nFor House giAnt, life is a constant struggle, for if they're not of any size of note, they do stand on the shoulders of great achievers of famous deeds. Now they snob any task lower than those deeds, just they don't remember how low they were, which leaves the job options pretty open.\n\nFor House ululAnt, we aren't sure if they derive their name from being artists and chanters, if they relayed messages along the trail, or if they just screamed when the fight came to the core. No matter, today they can happily whistle and sing away like anyone else when choring.\n\nFor House savAnt, the burden is to know that the only thing they know is that no one knows anything. It is a special kind of wisdom that most prefer to ignore in their daily activities, though it is true that sometimes, they have better ideas. Especially when it comes to cooking.\n\nHouse defiAnt doesn't need anyone to remind them that they stood first in the colony's vanguard, because while they did take more risks, they also went astray a few times. After all, who doesn't like a little ice-sliding with the baggage train once in a while?\n\nFinally, House radiAnt, is probably the only House that can pride itself with some difference: some radiAnts see things. Real or unreal, these visions have proven both useful and a subject of jest and raillery in the past. Will this ability help the Ants on their Quest?\n\nWhat most strangers will find when it comes to the Ants of Ant Island, is that they actually don't remember much from the days of the Great Migration. Strangely, no one thought of chronicling the journey. All they trouble about, is what lies ahead: finding the Crown of the Queen."
          }
          isLast
        />
      </Wrap>
    </Wrapper>
    <Footer />
  </Container>
);

export default Lore;
