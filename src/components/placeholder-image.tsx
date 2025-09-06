export function PlaceholderImage({
  label = "Image",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 ${className}`}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_35%),radial-gradient(circle_at_70%_60%,white,transparent_35%)]" />
      <div className="relative flex h-full w-full items-center justify-center">
        <span className="text-xs font-medium tracking-wide text-neutral-500">
          {label}
        </span>
      </div>
    </div>
  );
}
