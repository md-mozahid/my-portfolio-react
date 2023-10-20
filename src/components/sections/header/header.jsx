const Header = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="mx-auto flex items-center justify-center p-6">
        <img
          className="w-96"
          src="https://static-00.iconduck.com/assets.00/web-developer-illustration-512x373-gpemoxa0.png"
          alt=""
        />
        <div className="pl-10 py-10">
          <div>
            <h1 className="text-4xl font-bold mb-3">
              Assalamu Alaikum
              <span className="text-red-500 uppercase">Md Muzahid</span>
            </h1>
            <h2 className="text-3xl mb-5">
              <span className="text-red-500 mr-3">a</span>
              Professional Front End Developer
            </h2>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              consequatur doloribus ad veritatis laboriosam culpa nesciunt
              soluta et eum optio?
            </p>
          </div>
          <div className="mt-16 mb-16">
            <h5 className="capitalize">Find with me</h5>
            <div className="flex items-center space-x-4 mt-2">
              <i className="fw-i fab fa-facebook-f"></i>
              <i className="fw-i fab fa-twitter"></i>
              <i className="fw-i fab fa-linkedin-in"></i>
              <i className="fw-i fas fa-envelope"></i>
            </div>
          </div>
          <button className="btn btn-primary">Hire Me</button>
        </div>
      </div>
    </div>
  )
}

export default Header
