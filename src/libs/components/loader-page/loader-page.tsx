import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./loader-page-style.css";

export default function LoaderPage(props: { isShowLoader: boolean }) {
  const loadingSpinner = () => {
    return (
      <div className="loading-screenr">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CircularProgress></CircularProgress>
      </div>
    );
  };

  return props.isShowLoader ? loadingSpinner() : null;
}
