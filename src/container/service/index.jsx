import Data from '../../data/servicesData'
import SingleService from './singleService'

const Service = () => {
  return (
    <>
    <section className="py-16">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((service, index) => {
          return <SingleService key={index} service={service} />
        })}
      </div>
    </section>
     <hr />
    </>
  )
}

export default Service
