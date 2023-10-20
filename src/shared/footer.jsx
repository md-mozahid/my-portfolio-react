const Footer = () => {
  return (
    <footer>
      <div className="flex justify-around items-center text-center px-5 mt-4 mb-6 ">
        <div className="text-slate-600">
          <span>© 2023. All rights reserved by Md muzahid.</span>
        </div>
        <div className="fw-i flex items-center space-x-5">
          <i className="fab fa-facebook-f hover:bg-[#3b5997]"></i>
          <i className="fab fa-linkedin-in hover:bg-[#0077b5]"></i>
          <i className="fab fa-twitter hover:bg-[#1ba1f2]"></i>
          <i className="fas fa-envelope hover:bg-[#7289da]"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
