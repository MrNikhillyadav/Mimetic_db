import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';


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
              <Link href={'/about'} className="bg-white text-black rounded-full p-3 cursor-pointer transition">
                <ArrowUpRight className="w-8 h-8" />
              </Link>
            </div>
  
            
          </div>
        </footer>
    )
}