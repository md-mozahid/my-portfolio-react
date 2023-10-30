import { useState } from 'react'
import PortfolioModal from './modal'
// import { motion } from 'framer-motion'

const img =
  'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'

const Portfolio = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
    console.log(setOpen)
  }
  return (
    <>
      {/* <motion.div
        layout={width > 768 ? true : false}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}> */}
      <div
        onClick={handleOpen}
        className="relative w-full hoverEffect object-contain overflow-hidden  p-6 border border-[#475569] rounded-lg hover:cursor-pointer">
        <img className="rounded-md object-cover" src={img} alt="image" />

        <div className="absolute bg-slate-500  h-[80px] w-full -bottom-full left-0 z-30 md:flex justify-center items-center transition-all ease-in-out duration-[500ms] hidden">
          
            <div className="font-semibold capitalize text-base text-center ">
              <h2>Flight Booking App.</h2>
            </div>
          
        </div>
      </div>
      {/* </motion.div> */}
      <PortfolioModal open={open} handleOpen={handleOpen} setOpen={setOpen} />
    </>
  )
}

export default Portfolio
