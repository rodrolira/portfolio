// src/components/ui/SectionTitle.tsx
interface SectionTitleProps {
    title: string
    subtitle?: string
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {title}
            </h2>
            <div className="w-24 h-1 bg-accent-cyan mx-auto rounded-full" />
            {subtitle && (
                <p className="mt-6! text-gray-400 mx-auto text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
