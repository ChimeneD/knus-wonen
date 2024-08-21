"use client";
import React from "react";
import { Triangle } from "react-loader-spinner";

const LoadingComponent = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center bg-white overflow-hidden">
      <Triangle
        visible
        height="80"
        width="80"
        color="var(--primary)"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default LoadingComponent;
