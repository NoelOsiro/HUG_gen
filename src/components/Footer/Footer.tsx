import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#d2f3f7] text-black">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Our Head Office</h2>
              <p className="flex items-center mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>Malindi Complex Lamu Road, Malindi, Kenya
              </p>
              <p className="flex items-center mb-2">
                <i className="fas fa-phone-alt mr-2"></i>+254 714 956 717
              </p>
              <p className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>humblegenerationke@gmail.com
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/twiit" className="btn btn-custom" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/fb" className="btn btn-custom" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/yt" className="btn btn-custom" title="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="/insta" className="btn btn-custom" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/linked" className="btn btn-custom" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Popular Links</h2>
              <a href="/about" className="block mb-2">About Us</a>
              <a href="/contact" className="block mb-2">Contact Us</a>
              <a href="/causes" className="block mb-2">Popular Causes</a>
              <a href="/events" className="block mb-2">Upcoming Events</a>
              <a href="/blog" className="block">Latest Blog</a>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
              <a href="/terms" className="block mb-2">Terms of use</a>
              <a href="/privacy" className="block mb-2">Privacy policy</a>
              <a href="/cookies" className="block mb-2">Cookies</a>
              <a href="/help" className="block mb-2">Help</a>
              <a href="/fqa" className="block">FAQs</a>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
              <form>
                <input className="block w-full mb-4 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" type="email" placeholder="Email goes here" />
                <button className="btn btn-custom w-full">Submit</button>
                <p className="mt-2 text-sm text-yellow-500">Don&apos;t worry, we don&apos;t spam!</p>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© <a href="/#" className="text-yellow-400">www.humblegeneration.co.ke</a>, All Right Reserved.</p>
          <p className="text-sm mt-4 md:mt-0">Designed By <a href="https://github.com/NoelOsiro" className="text-yellow-400">Q3M Wanda Solutions</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
