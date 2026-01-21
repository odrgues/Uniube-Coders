import { HomeWrapper } from "./styles";
import ParticlesBackground from "../../components/ParticlesBackground";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";
import InfoSection from "../../components/InfoSection";
import { infoSectionData } from "../../data/InfoSection";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <ParticlesBackground />

        <NavBar />
        <Banner />
      </HomeWrapper>
      {infoSectionData.map((item) => (
        <InfoSection
          key={item.id}
          img={item.img}
          title={item.title}
          text={item.text}
        />
      ))}
    </>
  );
};

export default Home;
