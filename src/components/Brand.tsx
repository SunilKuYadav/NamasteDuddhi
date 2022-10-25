import ImgSlider from "./slider";

const Brand = () => {
  return (
    <div>
      <div>
        <h1 style={{ color: "green", fontSize: "30px" }}>
          <span style={{ fontSize: "40px", color: "#f00" }}>T</span>riveni
          <span style={{ fontSize: "40px", color: "#f00" }}>P</span>oint
        </h1>
      </div>
      <div>
        <ImgSlider />
      </div>
      <div>about</div>
    </div>
  );
};

export default Brand;
