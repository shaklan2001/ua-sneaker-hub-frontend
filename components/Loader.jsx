import React from 'react'

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
          <img src="/logo.png" width={150} />
          <span className="text-3xl font-medium">Loading...</span>
        </div>
  )
}

export default Loader