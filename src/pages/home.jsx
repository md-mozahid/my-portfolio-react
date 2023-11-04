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
      <Contacts />
      <Portfolios />
      <Clients />
      <Skills />
    </>
  );
};

export default Home;
