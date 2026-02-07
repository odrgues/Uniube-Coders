import { HomeWrapper } from "./styles";
import ParticlesBackground from "../../components/ParticlesBackground";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CardsData from "../../data/Home/CardsData";
import IntroText from "../../components/IntroText";
import { IntroTextData } from "../../data/Home/IntroTextData";
import Slider from "../../components/Slider";
import SliderImagesData from "../../data/Home/SliderImagesData";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <ParticlesBackground>
          <Banner />
        </ParticlesBackground>
        <Card items={CardsData} />
        <IntroText data={IntroTextData} />
        <Slider images={SliderImagesData} />
      </HomeWrapper>
    </>
  );
};

export default Home;
