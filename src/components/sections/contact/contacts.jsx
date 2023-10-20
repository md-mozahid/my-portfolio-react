import Contact from './contact'
import Form from './form'

const Contacts = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          Contact With Me
        </h2>
      </div>
      <div className="flex gap-10 p-5">
        <Contact />
        <Form />
      </div>
    </section>
  )
}

export default Contacts
