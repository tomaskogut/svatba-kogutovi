import type { ReactNode } from 'react'

type BgWrapperProps = {
  children: ReactNode
}

export default function BgWrapper({ children }: BgWrapperProps) {
  return (
    <div className="relative inline-block">
      <div
        className="absolute inset-0 z-0 bg-white/70 ipadpro:bg-transparent "
        style={{
          WebkitMaskImage: `
      linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, black 20%, black 88%, transparent 100%)
    `,
          WebkitMaskComposite: 'intersect',
          maskImage: `
      linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%),
      linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)
    `,
          maskComposite: 'intersect',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
