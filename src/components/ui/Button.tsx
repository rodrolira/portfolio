import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

export const Button = ({ variant = 'primary', className, children, ...props }: ButtonProps) => {
    const base = 'px-6 py-3 rounded-lg font-semibold transition-colors'
    const variants = {
        primary: 'bg-accent-blue text-white hover:bg-blue-600',
        secondary: 'border border-accent-cyan text-accent-cyan hover:bg-accent-cyan/10',
    }
    return (
        <button className={`${base} ${variants[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}
