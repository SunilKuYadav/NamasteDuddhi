import { useEffect, useState } from "react";

import Pic1 from "../../assets/svg/IntroTPGIF.gif";
import Pic2 from "../../assets/img/TPBanner.png";
import Pic3 from "../../assets/img/TrivenipointLogo.png";

const Quotes = () => {
  const [counter, setCounter] = useState<number>(0);
  const length = DATA.length - 1;

  useEffect(() => {
    const interval = setInterval(() => time(true), 9000);
    return () => clearInterval(interval);
  }, []);

  const time = (direction: boolean) => {
    setCounter((prev) => {
      if (prev < length && direction) {
        return prev + 1;
      }
      if (prev === length && direction) {
        return 0;
      }
      if (prev === 0 && !direction) {
        return length;
      }
      return prev - 1;
    });
  };

  return (
    <>
      <div
        style={{
          minHeight: "400px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
          position: "relative",
        }}
      >
        <button
          style={{
            padding: "10px",
            fontSize: "70px",
          }}
          onClick={() => time(false)}
        >
          {`<`}
        </button>
        <div
          style={{
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              padding: "30px",
              height: "390px",
            }}
            alt="triveni point brand pivture"
            src={DATA[counter]}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {DATA.map((key, index) => (
              <div
                key={key}
                style={{
                  height: index === counter ? "15px" : "10px",
                  width: index === counter ? "15px" : "10px",
                  backgroundColor: index === counter ? "#0f0" : "#f009",
                  borderRadius: "50%",
                  margin: index === counter ? "4px" : "2px",
                }}
              />
            ))}
          </div>
        </div>
        <button
          style={{
            padding: "10px",
            fontSize: "70px",
          }}
          onClick={() => time(true)}
        >
          {`>`}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      ></div>
    </>
  );
};

export default Quotes;

const DATA = [Pic1, Pic2, Pic3];
