import { ChevronDown } from "lucide-react";
import type {
    InputHTMLAttributes,
    ReactNode,
    SelectHTMLAttributes,
    TextareaHTMLAttributes,
} from "react";
import { cn } from "../../lib/cn";

const control = cn(
    "w-full rounded-control border border-line bg-surface px-3.5 text-body text-ink",
    "placeholder:text-ink-3 transition-[border-color,box-shadow] duration-150",
    "focus:border-brand-mid focus:outline-none focus:ring-2 focus:ring-brand-mid/25",
    "disabled:cursor-not-allowed disabled:bg-muted disabled:text-ink-2",
    "aria-[invalid=true]:border-danger aria-[invalid=true]:focus:ring-danger/20"
);

interface FieldProps {
    label: string;
    htmlFor?: string;
    hint?: string;
    error?: string;
    className?: string;
    children: ReactNode;
}

export function Field({ label, htmlFor, hint, error, className, children }: FieldProps) {
    return (
        <div className={cn("space-y-1.5", className)}>
            <label htmlFor={htmlFor} className="block text-caption font-medium text-ink">
                {label}
            </label>
            {children}
            {error ? (
                <p role="alert" className="text-caption text-danger">
                    {error}
                </p>
            ) : hint ? (
                <p className="text-caption text-ink-2">{hint}</p>
            ) : null}
        </div>
    );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
}

export function Input({ invalid, className, ...props }: InputProps) {
    return (
        <input
            aria-invalid={invalid || undefined}
            className={cn(control, "h-11", className)}
            {...props}
        />
    );
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    invalid?: boolean;
}

export function Textarea({ invalid, className, rows = 4, ...props }: TextareaProps) {
    return (
        <textarea
            rows={rows}
            aria-invalid={invalid || undefined}
            className={cn(control, "resize-y py-2.5 leading-relaxed", className)}
            {...props}
        />
    );
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    invalid?: boolean;
}

export function Select({ invalid, className, children, ...props }: SelectProps) {
    return (
        <div className="relative">
            <select
                aria-invalid={invalid || undefined}
                className={cn(control, "h-11 appearance-none pr-10", className)}
                {...props}
            >
                {children}
            </select>
            <ChevronDown
                className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-ink-3"
                aria-hidden
            />
        </div>
    );
}