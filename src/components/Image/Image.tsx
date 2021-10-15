import "lazysizes";

import { ImageProps } from "~/types";

import { StyledImage } from "./elements";

export const Image: React.FC<ImageProps> = ({ src, placeholder, className, alt, ...props }) => {
  const computeClasses = (): string | undefined => {
    if (placeholder) {
      if (className) return className + " lazyload";
      else return "lazyload";
    } else return className;
  };

  return (
    <StyledImage
      {...props}
      alt={alt ?? ""}
      data-src={placeholder ? src : null}
      src={placeholder ? placeholder : src}
      className={computeClasses()}
    />
  );
};
