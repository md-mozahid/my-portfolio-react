import { useState } from 'react'
import PortfolioModal from './modal'

const img =
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

const Portfolio = ({ portfolio = {} }) => {
  const { title, category } = portfolio || {}
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div
        onClick={handleOpen}
        className="relative w-full hoverEffect object-contain overflow-hidden  p-6 border border-[#475569] rounded-lg hover:cursor-pointer">
        <img className="rounded-md object-cover" src={img} alt="image" />

        <div className="absolute bg-slate-500 h-[100px] w-full -bottom-full left-0 z-30 md:flex justify-center items-center transition-all ease-in-out duration-[500ms] hidden">
          <div className="font-semibold capitalize text-base text-center ">
            <h2>{title || 'Title'}</h2>

            <div className="space-x-3">
              {category.map((x, i) => (
                <span key={i}>{x}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PortfolioModal
        open={open}
        handleOpen={handleOpen}
        setOpen={setOpen}
        portfolio={portfolio}
      />
    </>
  )
}

export default Portfolio
