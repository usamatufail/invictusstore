import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Spinner = () => {
  return (
    <div
      className="sweet-loading"
      style={{ height: "50vh", position: "relative" }}
    >
      <RingLoader
        css={override}
        sizeUnit={"px"}
        size={208}
        color={"#9C27B0"}
        loading={true}
      />
    </div>
  );
};

export default Spinner;
