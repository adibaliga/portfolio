import { useEffect, useState } from "react";

export interface CustomButtonProps {
  text?: string;
  icon?: "facebook" | "download" | "linkedin" | "github";
  iconPosition?: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
  size?: "small" | "medium";
  type?: "default" | "active";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  icon = "",
  iconPosition = "left",
  onClick,
  disabled = false,
  size = "medium",
  type = "default",
}) => {
  const [iconSrc, setIconSrc] = useState<string | null>(null);

  useEffect(() => {
    if (icon) {
      const iconName = type === "default" ? `${icon}-white` : icon;
      import(`../../assets/${iconName}.svg`)
        .then((module) => setIconSrc(module.default))
        .catch((err) => console.error(`Error loading icon: ${iconName}`, err));
    }
  }, [icon, type]);
  const sizeClasses =
    size === "small" ? "px-4 py-3 text-base" : "px-5 py-4 text-xl";
  const typeClasses =
    type === "active"
      ? "bg-primary-white text-primary-black border-primary-black  border-2"
      : "bg-primary-black text-white";

  return (
    <button
      onClick={type === "active" ? onClick : undefined}
      disabled={disabled}
      className={`rounded-md font-sora font-semibold
        ${sizeClasses}
        ${
          disabled
            ? "bg-zinc-100 border-zinc-200 cursor-not-allowed text-zinc-300"
            : "bg-primary-black border-primary-black"
        }
        hover:bg-primary-neutral hover:text-primary-white hover:border-0
        ${typeClasses}
        flex items-center justify-center space-x-2
      w-15 h-12 
      `}
    >
      {icon && iconPosition === "left" && iconSrc && (
        <img
          className={`${text ? "mr-2" : ""} fill-current text-primary-white`}
          src={iconSrc}
          alt="icon"
        />
      )}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && iconSrc && (
        <img
          className={`${text ? "ml-2" : ""} fill-current text-primary-white`}
          src={iconSrc}
          alt="icon"
        />
      )}
    </button>
  );
};

export default CustomButton;
