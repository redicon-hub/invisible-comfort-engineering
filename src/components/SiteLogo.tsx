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
      className={`block max-w-full object-contain ${className || "h-8 w-auto sm:h-10 xl:h-11"}`}
    />
  );

  if (variant === "light") {
    return (
      <span className="inline-flex max-w-full shrink-0 items-center rounded-full bg-lime/90 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:px-4">
        {img}
      </span>
    );
  }
  return img;
}
