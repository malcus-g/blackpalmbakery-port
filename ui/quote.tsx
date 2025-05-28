import React from 'react'

type QuoteProps = {
    quote: string,
    author: string
}

export default function Quote(quoteProps: QuoteProps) {
  const { quote, author } = quoteProps;

  return (
    <div className="flex flex-col w-[80%] md:w-[65%] items-left justify-center text-left">
      <p className="text-gray-700 italic text-lg md:text-3xl mb-6 border-l-2 border-gray-300 pl-6 py-4 bg-gray-50">
        {'" ' + quote + ' "'}
      </p>
      <p className="flex justify-end text-gray-500 text-lg">
        -{author}
      </p>
    </div>
  )
}
