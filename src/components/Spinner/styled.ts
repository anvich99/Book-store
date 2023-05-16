import styled, { css } from "styled-components";

const spinnerAnimation = css`
  @keyframes rotate {
    from {
      transform: rotate(0deg) translate(-9px) rotate(0deg);
    }
    to {
      transform: rotate(360deg) translate(-9px) rotate(-360deg);
    }
  }
`;
const Spinner = css`
  position: relative;
  top: 10px;
  left: 10px;
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #000;
  border-radius: 3px;
  animation: rotate infinite linear;
  animation-duration: 0.5s;
  animation-delay: 0.1s;

  & ~ .spinner {
    margin-left: -10px;
  }
  :nth-child(2) {
    opacity: 0.8;
    animation-delay: 0.2s;
  }
  :nth-child(3) {
    opacity: 0.6;
    animation-delay: 0.3s;
  }
  :nth-child(4) {
    opacity: 0.35;
    animation-delay: 0.4s;
  }
  :nth-child(5) {
    opacity: 0.1;
    animation-delay: 0.5s;
  }
  ${spinnerAnimation}
`;

const SpinnerCircle = styled.div`
  ${Spinner}
`;
const SpinnerContainer = styled.div``;
export { SpinnerCircle, SpinnerContainer };
