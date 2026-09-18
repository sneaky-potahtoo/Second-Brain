import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  size: "sm" | "md" | "lg";
  startIcon?: ReactElement;
  onClick?: () => void;
  loading?: boolean;
}

// type Variants = "primary" | "secondary";

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const defaultStyles = "cursor-pointer rounded-md font-light flex items-center"


export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={ `${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.loading ? "opacity-45" : ""} ` }>
      {props.startIcon ? <div className="pr-2"> {props.startIcon} </div> : null} {props.text}
    </button>
  );
};
