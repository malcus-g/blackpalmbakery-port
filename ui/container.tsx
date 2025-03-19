import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
};

export default function Container({ children }: ContainerProps) {
  return (
    <main className="flex justify-center min-h-dvh">
      <div className="flex w-[95%] h-fit bg-slate-50 justify-center items-center mb-8 rounded-md">
          <div className="flex flex-col items-center w-full h-full shadow-md overflow-hidden">
              {children}
          </div>
      </div>
    </main>
  )
}
