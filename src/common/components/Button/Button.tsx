import { FC } from "react";
import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled";

export type ButtonProps = {
  type: "submit" | "button" | "reset";
  color?: "primary" | "secondary";
  variant: "outlined" | "text" | "contained";
  label?: string;
  onClick?: () => void;
};

export const CustomButton = styled(MuiButton)<ButtonProps>``;

export const Button: FC<ButtonProps> = ({ ...props }) => {
  return (
    <CustomButton variant={props.variant} color={props.color} type={props.type}>
      {props.label}
    </CustomButton>
  );
};
