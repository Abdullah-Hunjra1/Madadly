import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    padded?: boolean;
}

export function Card({ padded = true, className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-card border border-line bg-surface shadow-card",
                padded && "p-4 sm:p-6",
                className
            )}
            {...props}
        />
    );
}

interface CardHeaderProps {
    title: ReactNode;
    description?: ReactNode;
    action?: ReactNode;
    className?: string;
}

export function CardHeader({ title, description, action, className }: CardHeaderProps) {
    return (
        <div className={cn("mb-5 flex items-start justify-between gap-4", className)}>
            <div className="min-w-0">
                <CardTitle>{title}</CardTitle>
                {description && <p className="mt-1 text-caption text-ink-2">{description}</p>}
            </div>
            {action && <div className="shrink-0">{action}</div>}
        </div>
    );
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3
            className={cn("font-heading text-section font-semibold text-ink", className)}
            {...props}
        />
    );
}