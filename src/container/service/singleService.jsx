const img =
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

const singleService = () => {
  return (
    <div className="w-full p-6 border border-[#475569] rounded-lg hover:cursor-pointer">
      <img className="w-full rounded-md object-cover" src={img} alt="image" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">About Macbook</h3>
        <p className="mt-3 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        {/* <button
          className="btn btn-hover mt-4 rounded-md px-3 py-2 font-medium"
          type="button">
          Read More
        </button> */}
      </div>
    </div>
  )
}

export default singleService
