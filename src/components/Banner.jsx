"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef(null)

  const bannerImages = [
    {
      id: 1,
      url: "../img/h1.png",
      alt: "Tuyển sinh đại học 2025",
    },
    {
      id: 2,
      url: "../img/h2.png",
      alt: "Chương trình đào tạo",
    },
    {
      id: 3,
      url: "../img/h3.png",
      alt: "Hoạt động sinh viên",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerImages.length - 1 : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto slide functionality
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      nextSlide()
    }, 5000) // Change slide every 5 seconds

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  // Reset timer when manually changing slides
  const handleManualSlideChange = (action) => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }

    action()

    slideInterval.current = setInterval(() => {
      nextSlide()
    }, 5000)
  }

  return (
    <div className="banner-container">
      <div className="banner-slider">
        {bannerImages.map((image, index) => (
          <div
            key={image.id}
            className={`banner-slide ${index === currentSlide ? "active" : ""}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <img src={image.url || "/placeholder.svg"} alt={image.alt} className="banner-image" />
          </div>
        ))}

        <button
          className="banner-nav-button prev"
          onClick={() => handleManualSlideChange(prevSlide)}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          className="banner-nav-button next"
          onClick={() => handleManualSlideChange(nextSlide)}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="banner-indicators">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`banner-indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleManualSlideChange(() => goToSlide(index))}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
