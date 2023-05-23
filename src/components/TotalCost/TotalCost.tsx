import React from "react";
import { Total } from "./styled";

interface TotalCostProps {
  total: number;
}
export const TotalCost = ({ total }: TotalCostProps) => {
  return <Total>Total: {total}</Total>;
};
