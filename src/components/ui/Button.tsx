import { Loader2, Sparkles } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "danger" | "ai";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
    primary:
        "bg-brand text-white hover:bg-brand-hover shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(15_92_84/0.3)]",
    secondary: "bg-surface text-ink border border-line hover:bg-muted shadow-card",
    ghost: "text-ink-2 hover:bg-muted hover:text-ink",
    danger:
        "bg-danger text-white hover:brightness-95 shadow-[inset_0_1px_0_rgb(255_255_255/0.14)]",
    ai: "bg-ai-soft text-ai-ink border border-ai/30 hover:bg-[#f7e4c0]",
};

const sizes: Record<Size, string> = {
    sm: "h-9 px-3 text-caption gap-1.5",
    md: "h-11 px-4 text-body gap-2",
    lg: "h-12 px-5 text-body gap-2",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    loading?: boolean;
    icon?: ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    loading = false,
    icon,
    className,
    children,
    disabled,
    type = "button",
    ...props
}: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={cn(
                "inline-flex items-center justify-center rounded-control font-medium whitespace-nowrap",
                "transition-[background-color,box-shadow,transform,filter] duration-150 ease-soft",
                "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-55",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {loading ? (
                <Loader2 className="size-4 animate-spin" aria-hidden />
            ) : variant === "ai" && !icon ? (
                <Sparkles className="size-4 text-ai" aria-hidden />
            ) : (
                icon
            )}
            {children}
        </button>
    );
}