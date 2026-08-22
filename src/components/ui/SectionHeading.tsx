import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 leading-relaxed">{subtitle}</p>
      )}
      <div
        className={cn(
          "h-1 w-20 bg-brand-secondary mt-6 rounded-full",
          centered && "mx-auto"
        )}
      />
    </div>
  );
}
