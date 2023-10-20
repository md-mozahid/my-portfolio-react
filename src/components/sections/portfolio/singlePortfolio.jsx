const Portfolio = () => {
  return (
    <div className="w-[400px] p-6 border border-[#475569] rounded-xl hover:cursor-pointer hover:transition">
      <img
        className="w-full rounded-md object-cover"
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
      />
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <span>Gallery</span>
          <span>375</span>
        </div>
        <h5>Online food delivery app design</h5>
      </div>
    </div>
  )
};

export default Portfolio;
