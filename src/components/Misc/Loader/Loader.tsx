import React, { VFC } from "react";
import "./Loader.css";

interface LoaderTypes {
  loaderAccess: Boolean;
}
export const Loader: VFC<LoaderTypes> = ({ loaderAccess }): any => {
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
    return "";
  }
};
