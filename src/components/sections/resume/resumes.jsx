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
      <div className="flex items-center justify-between  space-x-5 mb-10 bg-slate-500 w-[900px] m-auto rounded-xl px-16 py-4">
        <button className="text-white border-0 outline-0" type="button">
          Education
        </button>
        <button className="text-whit border-0 outline-0" type="button">
          Professional Skill
        </button>
        <button className="text-white  border-0 outline-0" type="button">
          Experience
        </button>
        <button className="text-whit border-0 outline-0" type="button">
          Interview
        </button>
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
