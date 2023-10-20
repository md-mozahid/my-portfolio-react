import Form from "../../reUsable/form";
import Contact from "./contact";


const Contacts = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide">
          Contact With Me
        </h2>
      </div>
      <div className="flex gap-10 p-5">
        <Contact />
        <Form />
      </div>
    </section>
  );
}

export default Contacts
