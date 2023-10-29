import Portfolio from './singlePortfolio'
import Data from "../../../data/portfolioData";

const Portfolios = () => {
  return (
    <section className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          My Portfolio
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((portfolio, index) => {
          return <Portfolio key={index} portfolio={portfolio} />
        })}
      </div>
    </section>
  )
};

export default Portfolios;
