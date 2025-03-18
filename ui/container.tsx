import React from 'react'

type ContainerProps = {
    children: React.ReactNode,
};

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex w-[95%] h-fit bg-slate-50 justify-center items-center mt-12 mb-8 rounded-md">
        <div className="flex flex-col items-center w-full h-full shadow-md overflow-hidden">
            {children}
        </div>
    </div>
  )
}
