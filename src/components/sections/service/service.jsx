import ServicesData from '../../../data/servicesData'
import SingleService from './singleService'

const Service = () => {
  return (
    <section className="h-screen">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          Services
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ServicesData.map((service, index) => {
          return <SingleService key={index} service={service} />
        })}
      </div>
    </section>
  )
}

export default Service
