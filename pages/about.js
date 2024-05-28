import React from 'react'

const about = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-white-100 p-8 text-center max-w-[800px] mx-auto my-[50px] md:my-[80px] px-10">
        {/* Left side: Information about the business */}
        <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Welcome to UA Sneakers Hub! 🚀
        </h1>
        <p className="text-md md:text-xl py-3">At UA Sneakers Hub, we're passionate about providing sneaker enthusiasts with top-quality UA (Unauthorized Authentic) sneakers that deliver the perfect blend of style, comfort, and authenticity. With over two years of dedicated service, we've proudly served over 1000+ satisfied customers worldwide, each one contributing to our thriving community of sneaker lovers.</p>
        <p className="text-md md:text-xl py-3">But it's not just about the sneakers – it's about the experience. We strive to provide exceptional customer service every step of the way, from browsing our catalog to receiving your order at your doorstep. With our seamless shopping experience and prompt support, we aim to make your UA Sneakers Hub journey as smooth and enjoyable as possible.</p>
        <p className="text-md md:text-xl py-3">Join our community of passionate sneaker enthusiasts today and experience the excitement of UA like never before. Thank you for choosing UA Sneakers Hub – where style meets authenticity, one pair at a time.</p>
      </div>
      <div className="w-1/2">
        {/* Right side: Photo */}
        <img
          src="collection.png"
          alt="About Us Photo"
          className="object-cover w-4/5 mx-auto py-40"
        />
      </div>
    </div>
  )
}

export default about