import React from "react";
import Navbar from "../Navbar";

function FeatureLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}

export default FeatureLayout;
