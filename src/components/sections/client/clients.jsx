import Client from './client'

const Clients = () => {
  return (
    <section className="">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-sans font-bold tracking-wide uppercase">
          Client Feedback
        </h2>
      </div>
      <div>
        <Client />
      </div>
      <div className="flex items-center justify-center py-10">
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105">
          1
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105">
          2
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105">
          3
        </a>
        <a
          href="#"
          className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105">
          4
        </a>
      </div>
    </section>
  )
}

export default Clients
