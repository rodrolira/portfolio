interface BadgeProps {
    text: string
    color?: 'blue' | 'cyan' // Por si queremos variar
}

export const Badge = ({ text, color = 'cyan' }: BadgeProps) => {
    const colors = {
        blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
        cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
    }

    return (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${colors[color]}`}>
            {text}
        </span>
    )
}
