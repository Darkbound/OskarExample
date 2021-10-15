import styled, { css } from "styled-components";

import { boxProperties } from "~/styles";
import { ImageProps } from "~/types";
import { omitNonDOMProps } from "~/utils";

const imageBase = css<ImageProps>`
  object-fit: ${({ objectFit = "cover" }) => objectFit};
  width: auto;
`;

const defaultImage = css`
  ${imageBase}
`;

const fluidImage = css`
  ${imageBase}
  width: 100%;
`;

const imageStyles = css<ImageProps>`
  ${({ kind }) => {
    switch (kind) {
      case "fluid":
        return css`
          ${fluidImage}
        `;
      default:
        return css`
          ${defaultImage};
        `;
    }
  }};
`;

export const StyledImage: React.FC<ImageProps> = styled((props: ImageProps) => {
  const { alt, ...domProps } = omitNonDOMProps(props, ["kind", "objectFit"]);
  return <img {...domProps} alt={alt} />;
})`
  ${imageStyles};
  ${boxProperties};
`;
