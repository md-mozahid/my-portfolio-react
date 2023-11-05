import Header from "./header";
import Clients from "./clients";
import Services from "./services";
import Contacts from "./contacts";
import Portfolios from "./portfolios";
import Skills from "./skills";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Skills />
      <Portfolios />
      <Clients />
      <Contacts />
    </>
  );
};

export default Home;
