import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-tr from-slate-900 via-blue-900 to-indigo-950 py-4 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r text-slate-200 to-indigo-300 tracking-tight">
            WeatherSphere
          </span>
          <span className="hidden md:inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-slate-50 bg-green-600 rounded-full">
            LIVE
          </span>
        </div>
        <div className="text-slate-50 text-sm sm:text-base flex items-center gap-2">
          <span className="hidden sm:inline">Real-time weather insights</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
        </div>
      </div>
    </nav>
  );
}