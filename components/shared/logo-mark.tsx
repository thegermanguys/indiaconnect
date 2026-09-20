import { cn } from "@/lib/utils";

/**
 * Signature mark: a tricolor disc (saffron / white / india-green) with a
 * simplified 24-spoke Ashoka Chakra in navy — echoes the national flag
 * without reproducing it verbatim, used as the app's icon/favicon and next
 * to the wordmark in the navbar and footer.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="hsl(var(--surface))" />
      <path d="M24 2a22 22 0 0 1 0 44 22 22 0 0 1 0-14.67A7.33 7.33 0 1 0 24 16.67 22 22 0 0 1 24 2z" fill="hsl(var(--saffron))" />
      <path d="M24 46A22 22 0 0 1 24 2a22 22 0 0 0 0 14.67 7.33 7.33 0 1 1 0 14.66A22 22 0 0 0 24 46z" fill="hsl(var(--india-green))" />
      <circle cx="24" cy="24" r="7.3" fill="hsl(var(--surface))" stroke="hsl(var(--navy))" strokeWidth="1.2" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="24"
          y1="24"
          x2={24 + 6.8 * Math.cos((i * Math.PI) / 12)}
          y2={24 + 6.8 * Math.sin((i * Math.PI) / 12)}
          stroke="hsl(var(--navy))"
          strokeWidth="0.7"
        />
      ))}
      <circle cx="24" cy="24" r="1.4" fill="hsl(var(--navy))" />
    </svg>
  );
}
