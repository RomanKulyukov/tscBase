import React, { VFC } from "react";
import "./Loader.css";

interface LoaderPropTypes {
  loaderAccess: Boolean;
}

export const Loader: VFC<LoaderPropTypes> = ({ loaderAccess }) => {
  if (loaderAccess) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return null;
  }
};
