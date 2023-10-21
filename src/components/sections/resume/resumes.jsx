import { Link, Outlet } from 'react-router-dom'

const Resumes = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          My Resume
        </h2>
      </div>
      <div className="flex items-center justify-between  mb-16 text-center w-[1000px] mx-auto ">
        <Link to='educations'
          className="w-[250px] py-3 rounded-l-lg border border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Education
        </Link>
        <Link
          to="skills"
          className="w-[250px] py-3  border-t border-b border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          My Skills
        </Link>
        <Link to='experience'
          className="w-[250px] py-3  border border-r-0 border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Experience
        </Link>
        <Link to='interview'
          className="w-[250px] py-3 rounded-r-lg border border-[#475569] cursor-pointer hover:bg-slate-700"
          type="button">
          Interview
        </Link>
      </div>
      <Outlet />
    </section>
  )
}

export default Resumes

// px-16 py-4 text-white bg-slate-500 rounded-md border-0 outline-0
