import { css } from "styled-components";
import { Colors } from "ui";
import { MediaBreakpoints } from "./media";

const HeadlineOne = css`
  font-weight: 700;
  color: ${Colors.Primary};
  font-size: 56px;
  line-height: 64px;

  ${MediaBreakpoints.sm} {
    font-size: 32px;
    line-height: 44px;
  }
`;
const HeadlineTwo = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Colors.Primary};

  ${MediaBreakpoints.sm} {
    font-size: 28px;
    line-height: 40px;
  }
`;
const HeadlineThree = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.Primary};
`;
const SublineTitle = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: ${Colors.Primary};
`;
const SublineText = css`
  font-family: "Helios";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.Secondary};
`;
const BodyPrimary = css`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.Primary};
`;
const BodySecondary = css`
  font-family: "Helios";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${Colors.Primary};
`;
const ButtonText = css`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  text-align: center;
  color: ${Colors.White};
`;
export {
  HeadlineOne,
  HeadlineTwo,
  HeadlineThree,
  SublineTitle,
  SublineText,
  BodyPrimary,
  BodySecondary,
  ButtonText,
};
