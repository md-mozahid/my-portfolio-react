const ModalContent = ({ portfolio = {}, handleClose }) => {
  const { title, thumbnail, description, category, link, source } =
    portfolio || {};

  return (
    <div className="relative w-full p-6 border bg-slate-800 border-[#475569] rounded-lg">
      <span
        className="absolute  top-3 right-3 text-2xl cursor-pointer hover:bg-rose-600 px-3 py-1 rounded-full"
        onClick={handleClose}
      >
        X
      </span>
      <div className="min-h-[5vh] max-h-[50vh] overflow-hidden scrollbar-hide rounded-lg">
        <img src={thumbnail} alt="image" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between font-semibold">
          <span className="text-xl font-semibold">{title}</span>
          <span>375</span>
        </div>
        <p className="mt-3">{description}</p>
        <div className="mt-5 space-x-5 text-center">
          {category.map((tag, i) => (
            <button key={i} className="bg-purple-500 px-4 py-1  rounded-full">
              {tag}
            </button>
          ))}
        </div>
        <div className="mt-5 flex">
          <a
            type="button"
            className="btn border"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Live Preview
          </a>
          <a
            type="button"
            className="btn border"
            href={source}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
