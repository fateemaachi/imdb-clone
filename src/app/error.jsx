'use client'

import { useEffect } from "react"

const error = ({error, reset}) => {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);


  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later</h1>
      <button 
      className="hover:text-amber-600"
      onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default error