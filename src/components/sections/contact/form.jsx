const Form = () => {
  return (
    <form action="#" className="border border-[#475569] p-5 rounded-xl">
      <div className="">
        <input className="inputVal" type="text" placeholder="Your name" />
        <input
          className="inputVal"
          type="text"
          placeholder="Your phone number"
        />
      </div>
      <input className="inputVal" type="text" placeholder="Your email" />
      <input className="inputVal" type="text" placeholder="Your subject" />
      <textarea
        className="inputVal"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Your message"></textarea>
      <button
        className="btn btn-fw mt-12 border border-[#475569]"
        type="submit">
        Send Message
        <i className="fa fa-arrow-right ml-2" aria-hidden="true"></i>
      </button>
    </form>
  )
}

export default Form
