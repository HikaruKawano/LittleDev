import React, { MouseEventHandler } from "react";
import { CardStyle } from "./style";

interface props {
  children: JSX.Element | React.ReactElement | JSX.Element[];
  width?: string;
  height?: string;
  flexDirection?: string;
  align?: string;
  margin?: string;
  justify?: string;
  onClick?: MouseEventHandler<HTMLElement>;

  resWidth?: string;
  resHeight?: string;
  resFlexDirection?: string;
  resMargin?: string;
  resPadding?: string
  resAlign?: string;
}

const Card: React.FC<props> = ({
  children,
  width,
  height,
  flexDirection,
  align,
  margin,
  justify,
  onClick,
  
  resFlexDirection,
  resHeight,
  resWidth,
  resMargin,
  resPadding,
  resAlign,
}) => {
  return (
    <CardStyle
      width={width}
      height={height}
      flexDirection={flexDirection}
      align={align}
      justify={justify}
      margin={margin}  
      onClick={onClick}


      resFlexDirection={resFlexDirection}
      resHeight={resHeight}
      resWidth={resWidth}
      resMargin={resMargin}
      resPadding={resPadding}
      resAlign={resAlign}
    >
      {children}
    </CardStyle>
  );
};

export default Card;
