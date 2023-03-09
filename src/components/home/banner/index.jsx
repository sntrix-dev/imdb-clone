import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src={banner}
        alt=""
        width="100%"
        height="100%"
        className="banner-image"
      />
    </div>
  );
};

export default Banner;
