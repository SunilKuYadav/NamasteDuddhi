import React from "react";

const Header = () => {
  return (
    <div
      style={{
        border: "1px solid red",
        backgroundColor: "#fff6",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Fasthand",
          fontSize: "50px",
          padding: 0,
          margin: 0,
          lineHeight: "50px",
        }}
      >
        <span style={{ color: "green", fontSize: 70 }}>न</span>
        <span style={{ color: "green" }}>मस्ते</span>
        <span style={{ color: "red", fontSize: 70 }}>D</span>
        <span style={{ color: "red" }}>uddhi</span>
      </h1>
      <h3 style={{ fontSize: "50px", color: "#ff0" }}>A Step Towards Future</h3>
    </div>
  );
};

export default Header;
