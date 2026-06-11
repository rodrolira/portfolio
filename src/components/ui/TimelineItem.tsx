import type { Experience } from '@/types'

interface TimelineItemProps {
  experience: Experience
  side?: 'left' | 'right' // para alternar en desktop
}

export const TimelineItem = ({ experience, side = 'left' }: TimelineItemProps) => {
  return (
    <div className={`flex w-full ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
      {/* Línea temporal y punto */}
      <div className="hidden md:flex flex-col items-center w-12 relative">
        <div className="w-3 h-3 bg-accent-cyan rounded-full mt-6 z-10" />
        <div className="w-0.5 h-full bg-white/10 absolute top-0" />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex-1 p-4 md:p-6">
        <div className="bg-primary-light/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent-cyan/50 transition-colors">
          <span className="text-xs text-accent-cyan uppercase tracking-widest">
            {experience.startDate} – {experience.endDate || 'Presente'}
          </span>
          <h3 className="text-xl font-semibold text-white mt-2">{experience.role}</h3>
          <p className="text-sm text-gray-400 mt-1">{experience.company}</p>
          <p className="text-gray-300 mt-3">{experience.description}</p>
          {experience.highlights && experience.highlights.length > 0 && (
            <ul className="mt-3 space-y-1">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                  <span className="text-accent-cyan mt-1.5">▹</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
