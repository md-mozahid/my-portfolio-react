import Portfolio from './singlePortfolio'
import Data from "../../../data/portfolioData";

const Portfolios = () => {
  return (
    <section className="h-screen">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          My Portfolio
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Data.map((portfolio, index) => {
          return <Portfolio key={index} portfolio={portfolio} />
        })}
      </div>
    </section>
  )
};

export default Portfolios;
