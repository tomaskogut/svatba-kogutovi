import * as React from 'react'

type LayoutProps = {
  children: React.ReactNode
  background?: string
}

export default function Layout({ children, background }: LayoutProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  )
}
