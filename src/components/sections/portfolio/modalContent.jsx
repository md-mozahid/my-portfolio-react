const img = 'https://i.ibb.co/k3FDD0T/Flight-book-app.png'
const projectLink = 'https://m-react-redux-flight-booking-app.netlify.app'

const ModalContent = () => {
  return (
    <div className="w-full p-6 border bg-slate-800 border-[#475569] rounded-lg">
      <div className="min-h-[5vh] max-h-[50vh] overflow-hidden scrollbar-hide rounded-lg">
        <img
        //   className="rounded-md max-w-2xl object-cover object-center"
          src={img}
          alt="image"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between font-semibold">
          <span className="text-xl font-semibold">Flight Booking App.</span>
          <span>375</span>
        </div>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rerum
          neque, recusandae totam reprehenderit fuga odio atque accusamus
          voluptatibus optio odit earum debitis quod dignissimos voluptate sunt
          dolore minima vero. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Praesentium atque sequi laudantium maiores quibusdam
          nesciunt voluptate quod, asperiores corrupti! Tempora.{' '}
        </p>
        <div className="mt-5 space-x-5">
          <button className="bg-purple-500 px-4 py-1 rounded-full">
            React
          </button>
          <button className="bg-purple-500 px-4 py-1 rounded-full">
            Javascript
          </button>
          <button className="bg-purple-500 px-4 py-1 rounded-full">
            Material ui
          </button>
          <button className="bg-purple-500 px-4 py-1 rounded-full">
            Framer
          </button>
        </div>
        <div className="mt-5 flex">
          <button type="button" className="btn border" src={projectLink}>Live Preview</button>
          <button type="button" className="btn border">GitHub</button>
        </div>
      </div>
    </div>
  )
}

export default ModalContent
