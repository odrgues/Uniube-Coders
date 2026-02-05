import { HomeWrapper } from "./styles";
import ParticlesBackground from "../../components/ParticlesBackground";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CardsData from "../../data/Home/CardsData";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <ParticlesBackground>
          <Banner />
        </ParticlesBackground>
        <Card items={CardsData} />
      </HomeWrapper>
    </>
  );
};

export default Home;
