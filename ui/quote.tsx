import React from 'react'
import { BsQuote } from 'react-icons/bs';

type QuoteProps = {
    quote: string,
    author: string
}

export default function Quote(quoteProps: QuoteProps) {
  const { quote, author } = quoteProps;

  return (
    <div className="flex flex-col w-[80%] md:w-[65%] items-left justify-center text-left">
      <BsQuote className="text-xl md:text-3xl text-gray-500 mb-4" />
      <p className="text-gray-700 italic text-lg md:text-3xl mb-6">
        {quote}
      </p>
      <p className="flex justify-end text-gray-500 text-lg">
        -{author}
      </p>
    </div>
  )
}
