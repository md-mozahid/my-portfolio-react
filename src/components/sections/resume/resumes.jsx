import Data from '../../../data/educationsData'
import Resume from './singleResume'

const Resumes = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          My Resume
        </h2>
      </div>
      <div className="flex items-center justify-between  mb-16 text-center w-[1000px] mx-auto ">
        <a
          className="w-[250px] py-3 rounded-l-lg border border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Education
        </a>
        <a
          className="w-[250px] py-3  border-t border-b border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Professional Skill
        </a>
        <a
          className="w-[250px] py-3  border border-r-0 border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Experience
        </a>
        <a
          className="w-[250px] py-3 rounded-r-lg border border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Interview
        </a>
      </div>

      <div className="grid grid-cols-2 gap-10 w-[1000px] m-auto">
        {Data.map((resume, index) => {
          return <Resume key={index} resume={resume} />
        })}
      </div>
    </section>
  )
}

export default Resumes

// px-16 py-4 text-white bg-slate-500 rounded-md border-0 outline-0
