'use client'

import React, {useEffect} from 'react'
import { heroSlides  } from '@/data/data'
import "./hero.css"

import AOS from "aos"

import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import HeroSlide from '@/components/HeroSlide'

export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      mirror: false,
      once: false
    })
  }, [])

  return (
    <section id="hero-slider" className='hero-slider'>
      <div className="container-md" data-aos='fade-in'>
        <div className="row">
          <div className="col-12">
            <Swiper>
              {heroSlides.map(slide => (
                <SwiperSlide>
                <HeroSlide slide={slide}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
