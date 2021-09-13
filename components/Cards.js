const Cards = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-[2rem] lg:container mx-auto">
      {children}
    </div>
  );
};

export default Cards;
