import React, { Children } from "react";
import { NextComponentType, NextPageContext } from "next";

import { usePreload } from "./preload.logic";

export interface IProps {
  children: React.ReactNode;
}

export const Preload = ({ children }: IProps) => {
  const { firstLoad, loadingVisible } = usePreload();

  return (
    <>
      {loadingVisible && (
        <div className="preload-bg" style={{ opacity: firstLoad ? 1 : 0 }}>
          <div className="rotating-plane" />
        </div>
      )}
      <div style={{ display: firstLoad ? "none" : "block" }}>{children}</div>
    </>
  );
};
