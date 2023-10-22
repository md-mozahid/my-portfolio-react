import Data from '../../../data/testimonialData'
import Testimonial from './singleTestimonial'

const Testimonials = () => {
  return (
    <section className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          Testimonial
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Data.map((testimonial, index) => {
          return <Testimonial key={index} testimonial={testimonial} />
        })}
      </div>
    </section>
  )
}

export default Testimonials
