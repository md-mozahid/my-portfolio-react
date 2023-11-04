import Close from "../../assets/icons/x.svg";
import ButtonLink from "../../components/button/button-link";

const ModalContent = ({ portfolio, handleClose }) => {
  const { title, thumbnail, description, category, link, source } =
    portfolio || {};

  return (
    <div className="relative w-full p-6 border bg-slate-800 border-[#475569] rounded-lg">
      <img
        className="absolute w-8 bg-green-500 top-5 right-5 text-2xl cursor-pointer p-1 rounded-full hover:bg-rose-600"
        onClick={handleClose}
        src={Close}
        alt="close"
      />

      <div className="min-h-[5vh] max-h-[40vh] overflow-hidden scrollbar-hide rounded-lg">
        <img src={thumbnail} alt="image" />
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between font-semibold">
          <span className="text-xl font-semibold">{title}</span>
        </div>
        <p className="mt-3">{description}</p>
        <div className="my-5 space-x-5">
          {category.map((tag, i) => (
            <span key={i} className="bg-sky-500 px-4 py-1  rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 space-x-6 ">
          <ButtonLink
            className="bg-pink-600 hover:bg-pink-700"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Live Preview
          </ButtonLink>
          <ButtonLink
            className="bg-teal-600 hover:bg-teal-700"
            href={source}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
