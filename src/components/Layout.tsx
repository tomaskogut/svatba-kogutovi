import * as React from 'react'

type LayoutProps = {
  children: React.ReactNode
  leftImage?: string
  rightImage?: string
}

export default function Layout({ children, leftImage, rightImage }: LayoutProps) {
  return (
    <div className="relative">
      <div className="fixed inset-0 pointer-events-none flex">
        <div
          className="flex-1 bg-cover bg-center"
          style={{ backgroundImage: `url(${leftImage})` }}
        />

        <div className="w-[768px] max-w-[1200px]" />

        <div
          className="flex-1 bg-cover bg-center "
          style={{ backgroundImage: `url(${rightImage})` }}
        />
      </div>

      <div className="relative z-10 w-[768px] max-w-[1200px] mx-auto min-h-screen">{children}</div>
    </div>
  )
}
