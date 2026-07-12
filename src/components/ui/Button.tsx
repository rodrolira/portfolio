import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
    const base = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5'
    const variants = {
        primary: 'text-white bg-gradient-to-r from-accent-blue to-accent-violet hover:brightness-110 glow-blue',
        secondary: 'border border-white/15 text-white hover:border-accent-cyan/60 hover:text-accent-cyan backdrop-blur-sm',
    }
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}
