const Contact = () => {
  return (
    <div className="w-[400px] p-6 bg-slate-500 rounded-xl">
      <img
        className="w-96 rounded-md"
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
      />
      <div className="mt-4">
        <h5 className="capitalize">Find with me</h5>
        <div className="space-y-4 mt-4">
          <button
            className="btn btn-fw text-left py-2.5 pl-5 hover:bg-[#0d9488]"
            type="button">
            Email
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 hover:bg-[#0d9488]"
            type="button">
            Linkedin
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 hover:bg-[#0d9488]"
            type="button">
            Twitter
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 hover:bg-[#0d9488]"
            type="button">
            Instagram
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 hover:bg-[#0d9488]"
            type="button">
            Whatsapp
          </button>
          <button
            className="btn btn-fw text-left py-2.5 pl-5 hover:bg-[#0d9488]"
            type="button">
            Messenger
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
