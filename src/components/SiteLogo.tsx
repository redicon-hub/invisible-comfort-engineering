import logoAsset from "@/assets/sp-logo.png.asset.json";

type Props = {
  /** "light" wraps the logo in an ivory chip so it stays readable on photos/dark areas */
  variant?: "dark" | "light";
  className?: string;
};

export function SiteLogo({ variant = "dark", className = "" }: Props) {
  const img = (
    <img
      src={logoAsset.url}
      alt="SP Termoidraulica"
      width={812}
      height={260}
      className={`w-auto ${className || "h-10 md:h-12"}`}
    />
  );

  if (variant === "light") {
    return (
      <span className="inline-flex items-center rounded-full bg-lime/90 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md">
        {img}
      </span>
    );
  }
  return img;
}
