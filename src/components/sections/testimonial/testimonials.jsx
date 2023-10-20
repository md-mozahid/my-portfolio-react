import Data from '../../../data/testimonialData'
import Testimonial from './singleTestimonial'

const Testimonials = () => {
  return (
    <section className="w-full h-screen">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          Testimonial
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Data.map((testimonial, index) => {
          return <Testimonial key={index} testimonial={testimonial} />
        })}
      </div>
    </section>
  )
}

export default Testimonials
