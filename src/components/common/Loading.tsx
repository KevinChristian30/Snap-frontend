import React from "react";
import Icons from "../Icons";

import "../../app/globals.css";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-1">
      <Icons.logo className="h-16 w-16 animate-bounce"/>
      <h1>Snap</h1>
    </div>
  );
};

export default Loading;
