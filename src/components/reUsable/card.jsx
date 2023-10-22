const Card = ({img, title, like, description, btn}) => {
  return (
    <div className="w-full p-6 border border-[#475569] rounded-md hover:cursor-pointer hover:transition">
      <img
        className="w-full rounded-md object-cover"
        src={img}
        alt="card image"
      />
      <div className="mt-4">
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>{title}</span>
          <span>{like}</span>
        </div>
        <h5 className="mt-3 text-sm">{description}</h5>
      </div>
      <button className="btn" type="button">
        {btn}
      </button>
    </div>
  )
}

export default Card
