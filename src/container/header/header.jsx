import { images } from '../../constants'

const Header = () => {
  return (
    <>
      <header className="h-[100vh] flex gap-6">
        <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-wider mb-5">
                Lorem ipsum dolor sit <br /> amet consectetur dicta.
              </h1>
              <p className="w-1/2 m-auto mb-10">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
            </div>
            <div className="flex items-start flex-col mt-10">
              <h3 className="uppercase text-lg mb-6">find with me</h3>
              <div className="fw-i flex items-center space-x-5">
                <i className="fab fa-facebook-f hover:bg-[#3b5997]"></i>
                <i className="fab fa-linkedin-in hover:bg-[#0077b5]"></i>
                <i className="fab fa-twitter hover:bg-[#1ba1f2]"></i>
                <i className="fas fa-envelope hover:bg-[#7289da]"></i>
              </div>
            </div>
          </div>
          <div className="">
            <img src={images.HeroImg} alt="" />
          </div>
        </div>
      </header>
      <hr />
    </>
  )
}

export default Header
