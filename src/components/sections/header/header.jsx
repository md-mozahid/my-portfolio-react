import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="h-screen">
      <div className="flex flex-col items-center mt-40">
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
        <div className="flex items-center space-x-5 mt-10 ">
          <Link
            to="resume"
            className="btn border border-[#475569] w-48 tracking-wider"
            type="button">
            Skills
          </Link>
          <Link
            to="portfolio"
            className="btn border border-[#475569] w-48 tracking-wider"
            type="button">
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
