const Testimonial = () => {
  return (
    <div className="w-[400px] p-6 border border-[#475569] rounded-xl hover:cursor-pointer hover:transition">
      <img
        className="w-full rounded-md object-cover"
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
      />
      <div className="mt-4">
        <h3 className="text-lg text-white font-semibold">About Macbook</h3>
        <p className="text-white mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        {/* <button className="btn btn-hover mt-6 px-3 py-2 " type="button">
          Read More
        </button> */}
      </div>
    </div>
  )
};

export default Testimonial;
