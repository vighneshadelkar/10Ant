import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./Loadingpg.css"

export default function Loadingpg() {
  return (
    <div className="loadiingConatiner">
      <ClipLoader
        color={"#3179C7"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
