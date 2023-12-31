import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-[calc(100vh-22rem)]">
      <h5 className="text-lg text-teal-500">404</h5>
      <h3 className="text-5xl mb-5">Page not found</h3>
      <p>Sorry, we couldn&apos:t find the page youre looking for.</p>
      <div className="flex items-center space-x-5 mt-10 ">
        <Link
          to="/"
          className="btn border border-[#475569] w-52 tracking-wider"
          type="button">
          <i className="fa-solid fa-arrow-left mr-1"></i> Go back
        </Link>
        <Link
          to="contact"
          className="btn border border-[#475569] w-52 tracking-wider"
          type="button">
          Contact us
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
