import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-950 py-6 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-50 text-sm">
            &copy; {new Date().getFullYear()} WeatherSphere. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-50 hover:text-blue-300 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-50 hover:text-blue-300 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-slate-50 hover:text-blue-300 transition-colors duration-300 text-sm">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-4 text-center md:text-left text-xs text-slate-50">
          Data provided by WeatherAPI.com | Designed with ❤️ Tharanga Jayawardhana for weather enthusiasts
        </div>
      </div>
    </footer>
  );
}