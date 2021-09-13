const Card = ({ img, title, link }) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a target="_blank" href={`https://${link}`}>
      <div className="">
        <img src={img} alt="" className="h-[10rem] sm:h-[12rem] " />
        <h1 className="mt-4 text-xl font-bold">{title}</h1>
        <p className="text-sm">{link}</p>
      </div>
    </a>
  );
};

export default Card;
