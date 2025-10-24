import * as React from 'react'

type LayoutProps = {
  children: React.ReactNode
  leftImage?: string
  rightImage?: string
}

export default function Layout({ children, leftImage, rightImage }: LayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      {leftImage && (
        <div
          className="hidden md:block fixed top-0 left-0 h-screen w-1/4 bg-cover bg-center border-4 border-blue-500 bg-blue-100/30"
          style={{ backgroundImage: `url(${leftImage})` }}
        />
      )}

      {rightImage && (
        <div
          className="hidden md:block fixed top-0 right-0 h-screen w-1/4 bg-cover bg-center border-4 border-green-500 bg-green-100/30"
          style={{ backgroundImage: `url(${rightImage})` }}
        />
      )}

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 border-red-500 bg-red-100/30">
        {children}
      </div>
    </div>
  )
}
