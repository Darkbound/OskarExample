import { ClickableTextProps } from "~/types";

import { StyledClickableText } from "./elements";

export const ClickableText: React.FC<ClickableTextProps> = (props) => (
  <StyledClickableText
    tabIndex={0}
    onKeyPress={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        props.onClick();
      }
    }}
    {...props}
  />
);
