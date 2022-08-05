import React from "react";
import FrameworkSelect from "../components/frameworkSelect";
import { useState, useEffect } from "react";
import NpmPackages from "../components/npmPackages";

const index = () => {
  const [theFramework, setTheFramework] = useState("");
  return (
    <>
      {theFramework ? (
        <NpmPackages
          theFramework={theFramework}
          setTheFramework={setTheFramework}
        />
      ) : (
        <FrameworkSelect setTheFramework={setTheFramework} />
      )}{" "}
    </>
  );
};

export default index;
