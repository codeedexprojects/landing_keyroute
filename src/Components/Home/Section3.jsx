import { useEffect, useRef } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import phone_mockup from '../../assets/phone_mockup.png';

export default function KeyRouteAboutSection() {
  const imageRef = useRef(null);
  
  useEffect(() => {
    AOS.init(); // Initialize AOS
    
    // Simple animation for the image when in view
    if (imageRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              imageRef.current.classList.add('translate-y-0', 'opacity-100');
              imageRef.current.classList.remove('translate-y-8', 'opacity-0');
            }
          });
        },
        { threshold: 0.2 }
      );
      
      observer.observe(imageRef.current);
      
      return () => {
        if (imageRef.current) {
          observer.unobserve(imageRef.current);
        }
      };
    }
  }, []);
  
  return (
    <section id="about" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-16 md:mb-0 pr-0 md:pr-16">
            <h2 
              data-aos="fade-up" // Add AOS fade-up animation
              data-aos-duration="1000"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-10"
            >
              About us
            </h2>
            
            <p 
              data-aos="fade-up" // Add AOS fade-up animation
              data-aos-duration="1200"
              className="text-2xl md:text-3xl text-gray-800 leading-relaxed max-w-xl"
            >
              KeyRoute is your smart travel companion for effortless group journeys. 
              From tours to local trips, we make it easy to find, compare, and book buses—quickly 
              and transparently, all in one place.
            </p>
          </div>
          
          {/* Phone Image */}
          <div 
            ref={imageRef} 
            data-aos="fade-up" // Add AOS fade-up animation
            data-aos-duration="1000"
            className="w-full md:w-1/2 flex justify-center transform transition-all duration-1000 translate-y-8 opacity-0"
          >
            <div className="w-72 md:w-96 lg:w-[30rem] xl:w-[34rem]">
              <img 
                src={phone_mockup}
                alt="KeyRoute App on Smartphone" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
