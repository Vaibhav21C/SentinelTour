import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section - Peru Inspired */}
      <section className="relative h-[90vh] w-full">
        <Image 
          src="/images/darjeeling-hero.jpg" 
          alt="Darjeeling Landscape" 
          fill 
          style={{objectFit: 'cover'}} 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="absolute top-20 left-0 right-0 flex flex-col items-center">
            <div className="bg-red-600 text-white px-4 py-1 text-sm font-medium tracking-wider">
              INDIA'S DREAMSCAPE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-2">DARJEELING</h1>
          </div>
          
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl mb-10 font-light">Experience the mystical beauty of the Himalayas</p>
            <Link 
              href="/destinations" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transition duration-300"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations - Peru Inspired */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="bg-red-600 text-white px-4 py-1 text-sm font-medium tracking-wider mb-4">
              EXPLORE
            </div>
            <h2 className="text-4xl font-bold text-center">FEATURED DESTINATIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Destination 1 - Peru Inspired */}
            <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="relative h-72">
                <Image 
                  src="/images/tiger-hill.jpg" 
                  alt="Tiger Hill" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-medium">
                  NATURE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Tiger Hill</h3>
                <p className="text-gray-600 mb-6">Experience breathtaking sunrise views of the Himalayas including Mt. Kanchenjunga.</p>
                <Link 
                  href="/nature/tiger-hill" 
                  className="text-red-600 font-medium hover:text-red-700 flex items-center"
                >
                  <span>DISCOVER</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Destination 2 - Peru Inspired */}
            <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="relative h-72">
                <Image 
                  src="/images/toy-train.jpg" 
                  alt="Darjeeling Toy Train" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-medium">
                  HERITAGE
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Darjeeling Toy Train</h3>
                <p className="text-gray-600 mb-6">Take a ride on the UNESCO World Heritage Darjeeling Himalayan Railway.</p>
                <Link 
                  href="/experiential/toy-train" 
                  className="text-red-600 font-medium hover:text-red-700 flex items-center"
                >
                  <span>DISCOVER</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Destination 3 - Peru Inspired */}
            <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="relative h-72">
                <Image 
                  src="/images/darjeeling-view.jpg" 
                  alt="Tea Gardens" 
                  fill 
                  style={{objectFit: 'cover'}} 
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-medium">
                  CULTURAL
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Tea Gardens</h3>
                <p className="text-gray-600 mb-6">Visit the world-famous tea estates and learn about tea production.</p>
                <Link 
                  href="/cultural/tea-gardens" 
                  className="text-red-600 font-medium hover:text-red-700 flex items-center"
                >
                  <span>DISCOVER</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Peru Inspired */}
      <section className="py-20 px-4 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">PLAN YOUR DARJEELING ADVENTURE</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto font-light">Discover the perfect itinerary for your visit to the Queen of Hills</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/experiences" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 transition duration-300"
            >
              BROWSE EXPERIENCES
            </Link>
            <Link 
              href="/useful-info" 
              className="bg-transparent hover:bg-red-700 border-2 border-white text-white font-bold py-4 px-8 transition duration-300"
            >
              TRAVEL INFORMATION
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Peru Inspired */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="bg-red-600 text-white px-4 py-1 text-sm font-medium tracking-wider mb-4">
              DARJEELING 360°
            </div>
            <h2 className="text-3xl font-bold text-center">YOUR HIMALAYAN ADVENTURE AWAITS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase">About Us</h3>
              <p className="text-gray-300 leading-relaxed">Your complete guide to exploring the mystical beauty of Darjeeling and its surrounding Himalayan landscapes.</p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/destinations" className="text-gray-300 hover:text-red-500 transition duration-300">Destinations</Link></li>
                <li><Link href="/experiences" className="text-gray-300 hover:text-red-500 transition duration-300">Experiences</Link></li>
                <li><Link href="/attractions" className="text-gray-300 hover:text-red-500 transition duration-300">Attractions</Link></li>
                <li><Link href="/events" className="text-gray-300 hover:text-red-500 transition duration-300">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase">Information</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-red-500 transition duration-300">About Darjeeling</Link></li>
                <li><Link href="/news" className="text-gray-300 hover:text-red-500 transition duration-300">News</Link></li>
                <li><Link href="/useful-info" className="text-gray-300 hover:text-red-500 transition duration-300">Useful Information</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-red-600 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-red-600 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full text-gray-300 hover:bg-red-600 hover:text-white transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Darjeeling 360°. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
