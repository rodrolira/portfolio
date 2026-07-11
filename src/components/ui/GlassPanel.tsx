import type { HTMLAttributes } from 'react'

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export const GlassPanel = ({ children, className, ...props }: GlassPanelProps) => {
    return (
        <div
            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mt-6 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
}
