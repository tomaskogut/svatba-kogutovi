import * as React from 'react'

type LayoutProps = {
  children: React.ReactNode
  leftImage?: string
  rightImage?: string
  mobileImage?: string
}

export default function Layout({ children, leftImage, rightImage, mobileImage }: LayoutProps) {
  return (
    <div className="relative">
      <div className="hidden ipadpro:flex fixed inset-0 pointer-events-none ">
        <div
          className="flex-1 bg-cover bg-center"
          style={{
            backgroundImage: `url(${leftImage})`,
            maskImage: 'linear-gradient(to right, black, black calc(100% - 70px), transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, black, black calc(100% - 70px), transparent)',
          }}
        />
        <div className="w-[768px] max-w-[1200px]" />

        <div
          className="flex-1 bg-cover bg-center"
          style={{
            backgroundImage: `url(${rightImage})`,
            maskImage: 'linear-gradient(to left, black, black calc(100% - 70px), transparent)',
            WebkitMaskImage:
              'linear-gradient(to left, black, black calc(100% - 70px), transparent)',
          }}
        />
      </div>

      <div
        className="ipadpro:hidden fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mobileImage || leftImage || rightImage})`,
        }}
      />

      <div className="hidden ipadpro:block fixed inset-0 bg-[#d497d5]/10 pointer-events-none" />

      <div className="relative z-10 w-full ipadpro:w-[768px] ipadpro:max-w-[1200px] mx-auto min-h-screen">
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-white/50 ipadpro:bg-transparent "
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        />
        <div className="ipadpro:hidden block fixed inset-0 bg-[#d497d5]/10 pointer-events-none" />

        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
