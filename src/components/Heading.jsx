const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg"mb-20 mt-[-2rem] md:mt-[-6rem] lg:mt-[-10rem]`}>
      {title && <h2 className="h2">{title}</h2>}{" "}
    </div>
  );
};

export default Heading;
