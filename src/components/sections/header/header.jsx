const Header = () => {
  return (
    <header>
      <div className="min-h-screen mx-auto flex flex-col items-center mt-36">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-5">
            Lorem ipsum dolor sit <br /> amet consectetur dicta.
          </h1>
          <p className="w-1/2 m-auto mb-10">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div className="flex items-center space-x-5 mt-10">
          <button className="btn border border-[#475569] w-48" type="button">
            Skills
          </button>
          <button className="btn border border-[#475569] w-48" type="button">
            Projects
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
