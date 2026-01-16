import Banner from "../../components/Banner";
import InfoSection from "../../components/InfoSection";
import { infoSectionData } from "../../data/InfoSection";
const Home = () => {
  return (
    <>
      <Banner />

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
