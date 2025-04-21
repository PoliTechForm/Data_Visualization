import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-amber-50 shadow-md z-50">
      <div className=" flex justify-evenly py-4">
        <a href="#alimentacion" className="text-gray-700 hover:text-indigo-600 font-medium">Alimentación</a>
        <a href="#longitud" className="text-gray-700 hover:text-indigo-600 font-medium">Longitud</a>
        <a href="#paises" className="text-gray-700 hover:text-indigo-600 font-medium">Países</a>
      </div>
    </nav>
)}