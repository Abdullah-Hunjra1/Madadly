import type { HTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Tone = "neutral" | "brand" | "ai" | "success" | "warning" | "danger" | "info";

const tones: Record<Tone, { chip: string; dot: string }> = {
    neutral: { chip: "bg-muted text-ink-2", dot: "bg-ink-3" },
    brand: { chip: "bg-brand-soft text-brand", dot: "bg-brand-mid" },
    ai: { chip: "bg-ai-soft text-ai-ink", dot: "bg-ai" },
    success: { chip: "bg-success-soft text-success", dot: "bg-success" },
    warning: { chip: "bg-warning-soft text-warning", dot: "bg-warning" },
    danger: { chip: "bg-danger-soft text-danger", dot: "bg-danger" },
    info: { chip: "bg-info-soft text-info", dot: "bg-info" },
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    tone?: Tone;
    dot?: boolean;
}

export function Badge({ tone = "neutral", dot = false, className, children, ...props }: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-caption font-medium",
                tones[tone].chip,
                className
            )}
            {...props}
        >
            {dot && <span className={cn("size-1.5 rounded-full", tones[tone].dot)} aria-hidden />}
            {children}
        </span>
    );
}