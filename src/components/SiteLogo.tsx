import logoAsset from "@/assets/sp-logo.png.asset.json";

type Props = {
  /** "light" renders the mark in ivory for dark/photo backgrounds */
  variant?: "dark" | "light";
  className?: string;
};

export function SiteLogo({ variant = "dark", className = "" }: Props) {
  return (
    <img
      src={logoAsset.url}
      alt="SP Termoidraulica"
      width={812}
      height={260}
      className={`h-9 w-auto transition-[filter] duration-500 md:h-10 ${className}`}
      style={
        variant === "light"
          ? {
              filter:
                "brightness(0) invert(1) drop-shadow(0 1px 12px rgba(0,0,0,0.45))",
            }
          : undefined
      }
    />
  );
}
