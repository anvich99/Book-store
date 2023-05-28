import { InputStyle } from "components/Input/styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Search = styled.form`
  position: relative;
  display: flex;
  width: 51%;
`;

const InputSearch = styled(InputStyle)`
  max-width: 542px;
  width: 100%;
  padding: 14px 16px 10px 20px;
`;
const SearchBtn = styled(Link)`
  position: absolute;
  top: 18px;
  right: 44px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export { Search, InputSearch, SearchBtn };
