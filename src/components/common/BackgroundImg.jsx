import bgImg from "../../assets/images/bgimg.png";

const BackgroundImg = ({ children }) => {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {children}
    </div>
  );
};

export default BackgroundImg;