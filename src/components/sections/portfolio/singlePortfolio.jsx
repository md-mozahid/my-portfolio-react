const img =
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

const Portfolio = () => {
  return (
    <div className="w-full p-6 border border-[#475569] rounded-lg hover:cursor-pointer">
      <img className="rounded-md object-cover" src={img} alt="image" />
      <div className="mt-4">
        <div className="flex items-center justify-between font-semibold">
          <span>Gallery</span>
          <span>375</span>
        </div>
        <p className="mt-3">Online food delivery app design</p>
      </div>
    </div>
  )
}

export default Portfolio
