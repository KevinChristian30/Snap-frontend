import React from "react";

interface SpacerProps {
  width?: number;
  height?: number;
}

const Spacer = (props: SpacerProps) => {
  const { width = 0, height = 0 } = props;

  return (
    <div
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default Spacer;
