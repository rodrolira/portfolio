import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="bg-primary-light/30 border border-white/10 rounded-lg p-4 flex items-center gap-4 hover:border-accent-blue/50 transition-colors">
      {/* Ícono placeholder (puedes reemplazar con react-icons o SVG) */}
      <div className="w-8 h-8 bg-accent-blue/20 rounded flex items-center justify-center text-accent-blue text-xs font-bold">
        {skill.name.charAt(0)}
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">{skill.name}</h4>
        {skill.level && (
          <div className="w-full h-1.5 bg-white/10 rounded-full mt-1">
            <div
              className="h-full bg-accent-cyan rounded-full"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
