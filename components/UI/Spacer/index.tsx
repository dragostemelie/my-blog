import React from "react";

interface IProps {
  height: string;
}

export const Spacer = ({ height }: IProps) => {
  return <div style={{ height }} />;
};
