import React from 'react'

type QuoteProps = {
    quote: string,
    author: string
}

export default function Quote(quoteProps: QuoteProps) {
  const { quote, author } = quoteProps;

  return (
    <div className="flex flex-col w-[85%] md:w-[65%] max-w-[1000px] items-left justify-center text-left mt-10 md:mt-14">
      <p className="text-gray-700 italic sm:text-xl md:text-3xl mb-6 border-l-2 border-gray-300 pl-6 py-4 bg-gray-50">
        {'" ' + quote + ' "'}
      </p>
      <p className="flex justify-end text-gray-500 text-lg">
        -{author}
      </p>
    </div>
  )
}
