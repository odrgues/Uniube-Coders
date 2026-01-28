import { HomeWrapper } from "./styles";
import ParticlesBackground from "../../components/ParticlesBackground";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import InfoCards from "../../components/InfoCards/index.jsx";
import { InfoCardsData } from "../../data/InfoCards.js";
import Slider from "../../components/Slider/index.jsx";
import { sliderImages } from "../../data/SliderImages.js";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <ParticlesBackground />

        <NavBar />
        <Banner />
      </HomeWrapper>
      <InfoCards items={InfoCardsData} />
      <Slider images={sliderImages} interval={3000} />
    </>
  );
};

export default Home;
