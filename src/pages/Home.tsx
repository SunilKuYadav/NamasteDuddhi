import React from "react";
import { Brand, Header, Quotes } from "../components";

import { ScreenWrapper } from "../GlobalStyle";

const Home = () => {
  return (
    <ScreenWrapper style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Quotes />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr
          style={{
            width: "100px",
          }}
        />
        <p style={{ fontSize: "60px", fontWeight: "bold" }}>Sponsored By</p>
        <hr
          style={{
            width: "100px",
          }}
        />
      </div>
      <Brand />
    </ScreenWrapper>
  );
};

export default Home;
