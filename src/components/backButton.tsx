interface BackButtonProps {
  href?: string
  label?: string
}

export default function BackButton({ href = '/', label = 'Zpět' }: BackButtonProps) {
  return (
    <a
      href={href}
      className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1.5
  rounded-full bg-white/70 text-gray-700 hover:bg-white hover:text-black
  shadow-sm backdrop-blur-sm transition-all duration-200"
    >
      <span className="text-lg">←</span>
      <span className="font-medium">{label}</span>
    </a>
  )
}
