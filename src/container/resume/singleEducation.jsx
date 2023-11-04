const singleResume = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl font-semibold mb-5">
          Education Qualification
        </h3>
      </div>
      <div className="border border-[#475569] p-6 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <h3 className="text-2xl font-medium mb-1">Education Title</h3>
            <span className="text-slate-300">
              Dhaka InternationalUniversity (2016 - 2019)
            </span>
          </div>
          <span className="bg-slate-400 px-3 py-2 rounded-md font-semibold">
            3.09/4
          </span>
        </div>
        <hr className="mt-5 mb-5" />
        <p className="text-slate-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
          odit!
        </p>
      </div>
    </div>
  )
}

export default singleResume
