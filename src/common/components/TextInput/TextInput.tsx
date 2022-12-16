import { ChangeEvent, CSSProperties, FC } from "react";
import { InputBase } from "@mui/material";
import styled from "@emotion/styled";

export type TextInputProps = {
  type: "email" | "text" | "password";
  placeholder: string;
  value?: string;
  styles?: "primary" | "secondary" | "apple";
  sx?: CSSProperties;
  onChange: (value: string) => void;
};

export type Styledprops = {
  color: "primary" | "secondary" | "apple";
};

export const Input = styled(InputBase)<TextInputProps>(({ styles }) => ({
  border:
    styles === "apple"
      ? "1px solid red"
      : styles === "primary"
      ? "1px solid yellow"
      : "1px solid green",
}));

export const TextInput: FC<TextInputProps> = ({ ...props }) => {
  return (
    <Input
      sx={props.sx}
      styles={props.styles}
      type={props.type}
      value={props.value}
      placeholder={props.placeholder}
      onChange={(event) =>
        props.onChange &&
        props.onChange((event as ChangeEvent<HTMLInputElement>).target.value)
      }
    />
  );
};
