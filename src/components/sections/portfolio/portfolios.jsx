import Portfolio from './singlePortfolio'
import Data from "../../../data/portfolioData";

const Portfolios = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <span className="text-red-500 text-lg font-semibold">
          Visit my portfolio and keep feedback
        </span>
        <h2 className="text-6xl font-sans font-bold tracking-wide">
          My Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Data.map((portfolio, index) => {
          return <Portfolio key={index} portfolio={portfolio} />;
        })}
      </div>
    </section>
  );
};

export default Portfolios;
