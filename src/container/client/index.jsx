import SingleClient from "./singleClient";

const Clients = () => {
  return (
    <div className="max-w-full">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-semibold tracking-wider uppercase">
          Client Feedback
        </h2>
      </div>
      <div>
        <SingleClient />
      </div>
      <div className="flex items-center justify-center py-10">
        {[1, 2, 3, 4].map((item, index) => (
          <a
            key={index}
            href="#"
            className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 hover:scale-105"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;
