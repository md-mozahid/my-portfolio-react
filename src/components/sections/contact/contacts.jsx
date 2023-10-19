import Form from "../../reUsable/form";
import Contact from "./contact";


const Contacts = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <span className="text-red-500 text-lg font-semibold">Contact</span>
        <h2 className="text-6xl font-sans font-bold tracking-wide">
          Contact With Me
        </h2>
      </div>
      <div className="flex gap-10">
        <Contact />
        <Form />
      </div>
    </section>
  );
}

export default Contacts
