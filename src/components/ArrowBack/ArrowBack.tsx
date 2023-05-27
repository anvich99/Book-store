import { ArrowIcon } from "assets";
import { Arrow } from "./styled";

interface ArrowBackProps {
  link: string;
}
export const ArrowBack = ({ link }: ArrowBackProps) => {
  return (
    <Arrow to={link}>
      <ArrowIcon />
    </Arrow>
  );
};
