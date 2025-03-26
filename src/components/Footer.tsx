import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';


export default function Footer(){
    return (
          <footer className="bg-white rounded-b-xl  ">
          <div className="container py-16 ">
            {/* Call to Action Section */}
            <div className="bg-black text-white cursor-pointer hover:bg-black/90 rounded-2xl p-6 mb-12 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-2">Let&apos;s Meet With Our Team</h2>
                <p className="text-green-100">
                  Giving You The Best Research Approach For Your Scientific Needs.
                </p>
              </div>
              <div className="bg-white text-black rounded-full p-3 cursor-pointer transition">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </div>
  
            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Logo */}
              <div>
                <h3 className="text-2xl font-bold mb-4">MimeticResearch</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-black/80">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black/80">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black/80">
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-black/80">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
  
              {/* About Column */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">About</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Company</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Leadership</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Press</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Careers</a></li>
                </ul>
              </div>
  
              {/* Help Column */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">Help</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Help Center</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Support Team</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Community</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Security FAQs</a></li>
                </ul>
              </div>
  
              {/* Legal Column */}
              <div>
                <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Terms Of Use</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-black/80">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    )
}