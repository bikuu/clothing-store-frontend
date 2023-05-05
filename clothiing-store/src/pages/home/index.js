import Banner from "./../../components/banner/index";
import Promotions from "./../../components/promotionSlider/index";
import DataList from "./../../components/dataList/index";

const Home = ({ matches }) => {
  return (
    <>
      <Banner />
      <Promotions />
      <DataList matches={matches} />
    </>
  );
};

export default Home;
