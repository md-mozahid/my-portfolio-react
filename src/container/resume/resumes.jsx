import { Link, Outlet } from 'react-router-dom'
import Data from '../../data/educationsData'
import Resume from './singleEducation'

const Resumes = () => {
  return (
    <section className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          My Resume
        </h2>
      </div>
      <div className="flex items-center justify-between  mb-16 text-center w-[960px] mx-auto uppercase tracking-wider">
        <Link>
          <button
            className="w-[240px] py-3 rounded-l-lg border border-[#475569] cursor-pointer hover:bg-slate-700 active"
            type="button">
            Education
          </button>
        </Link>
        <Link to="skills">
          <button
            className="w-[240px] py-3  border-t border-b border-[#475569] cursor-pointer hover:bg-slate-700"
            type="button">
            My Skills
          </button>
        </Link>
        <Link to="experience">
          <button
            className="w-[240px] py-3  border border-r-0 border-[#475569] cursor-pointer hover:bg-slate-700"
            type="button">
            Experience
          </button>
        </Link>
        <Link to="interview">
          <button
            className="w-[240px] py-3 rounded-r-lg border border-[#475569] cursor-pointer hover:bg-slate-700"
            type="button">
            Interview
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-x-6 gap-y-10 w-[1000px] m-auto">
        {Data.map((resume, index) => {
          return <Resume key={index} resume={resume} />
        })}
      </div>
      <Outlet />
    </section>
  )
}

export default Resumes
