import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-12 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">SpiceHub</h3>
          <p className="max-w-sm mb-6">
            Delivering happiness one meal at a time. The best local restaurants right to your door.
          </p>
          <div className="flex space-x-4">
            {/* Social Media Placeholder Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11A5 5 0 0122.5 11.5v11a5 5 0 01-5 5h-11a5 5 0 01-5-5v-11a5 5 0 015-5z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              hello@spicehub.com
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              123 Food Street, Yum City, YC 90210
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link href="/" className="hover:text-orange-500 transition-colors">Careers</Link></li>
            <li><Link href="/" className="hover:text-orange-500 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-orange-500 transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} SpiceHub. All rights reserved.</p>
      </div>
    </footer>
  );
}
