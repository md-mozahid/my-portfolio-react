const Client = () => {
  return (
    <div className="w-[900px] mx-auto text-center bg-slate-700 px-6 py-5 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img className="w-20 h-20 bg-slate-500 rounded-full" src="" alt="" />
          <div className="text-left">
            <h4 className="text-lg font-medium">Client Name</h4>
            <span className="">Designation</span>
          </div>
        </div>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      <p className="px-6 py-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        consequuntur? Tempora, hic. Maxime explicabo error esse, quasi
        perferendis dignissimos sint.
      </p>
    </div>
  )
}

export default Client
