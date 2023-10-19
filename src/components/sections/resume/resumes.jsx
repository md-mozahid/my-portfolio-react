import Resume from "./resume";
import Data from "../../../data/educationsData";

const Resumes = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <span className="text-red-500 text-lg font-semibold">
          2+ Years of Experience
        </span>
        <h2 className="text-6xl font-sans font-bold tracking-wide">
          My Resume
        </h2>
      </div>
      <div className="flex items-center justify-between gap-5">
        <button
          className="px-16 py-4 text-white bg-slate-500 rounded-md border-0 outline-0"
          type="button"
        >
          Education
        </button>
        <button
          className="px-16 py-4 text-white bg-slate-500 rounded-md border-0 outline-0"
          type="button"
        >
          Professional Skill
        </button>
        <button
          className="px-16 py-4 text-white bg-slate-500 rounded-md border-0 outline-0"
          type="button"
        >
          Experience
        </button>
        <button
          className="px-16 py-4 text-white bg-slate-500 rounded-md border-0 outline-0"
          type="button"
        >
          Interview
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {Data.map((resume, index) => {
          return <Resume key={index} resume={resume} />;
        })}
      </div>
    </section>
  );
};

export default Resumes;
