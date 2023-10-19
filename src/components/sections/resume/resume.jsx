const Resume = () => {
  return (
    <div className="bg-slate-600 p-6 rounded-lg">
      <h2 className="text-white text-2xl font-semibold ">
        Education Qualification
      </h2>
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h3 className="text-lg text-white">Education Title</h3>
          <span className="text-slate-300">
            Dhaka InternationalUniversity (2016 - 2019)
          </span>
        </div>
        <span className="text-red-500">3.09/4</span>
      </div>
      <hr />
      <p className="text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
        odit!
      </p>
    </div>
  );
};

export default Resume;
