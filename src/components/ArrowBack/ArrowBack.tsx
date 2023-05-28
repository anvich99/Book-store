import { ArrowIcon } from "assets";
import { Arrow } from "./styled";
import { useNavigate } from "react-router-dom";

interface ArrowBackProps {
  link: string;
}
export const ArrowBack = () => {
  const navigate = useNavigate();
  return (
    <Arrow onClick={() => navigate(-1)}>
      <ArrowIcon />
    </Arrow>
  );
};
