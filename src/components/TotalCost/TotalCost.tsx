import React from "react";
import { StyledSum, StyledTotal, StyledTotalContainer } from "./styled";

interface TotalCostProps {
  total: number;
}

export const TotalCost = ({ total }: TotalCostProps) => {
  return (
    <StyledTotalContainer>
      <StyledSum>Sum: {total}</StyledSum>
      <StyledSum>VAT: {total}</StyledSum>
      <StyledTotal>Total: {total}</StyledTotal>
    </StyledTotalContainer>
  );
};
