import { HomeWrapper } from "./styles";
import ParticlesBackground from "../../components/ParticlesBackground";
import Banner from "../../components/Banner";
import Card from "../../components/Card/index.jsx";
import { InfoCardsData } from "../../data/InfoCardsData.js";
import Slider from "../../components/Slider/index.jsx";
import { sliderImages } from "../../data/SliderImagesData.js";
import ImpactSection from "../../components/ImpactSection/index.jsx";
import { ImpactSectionData } from "../../data/ImpactSectionData.js";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <ParticlesBackground />
        <Banner />
      </HomeWrapper>
      <Card items={InfoCardsData} />
      <Slider images={sliderImages} interval={3000} />
      <ImpactSection data={ImpactSectionData} />
    </>
  );
};

export default Home;
