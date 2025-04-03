import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Aside = () => {
    const [ocultar, setOcultar] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
        'https://img.freepik.com/premium-photo/detailed-photo-chameleons-eyes_129172-1195.jpg?w=360',
        'https://img.freepik.com/premium-photo/beautiful-photo-is-must-everyday-work-ai-generated-best-wonderful-photo-images-very-nice_1089151-1199.jpg',
    ];

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) =>
            (prevSlide - 1 + images.length) % images.length
        );
    };

    const handleClick = () => {
        setOcultar(!ocultar);
    };

    return (
        <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <nav className="p-4">
                    <ul className={`space-y-2 duration-500 ${ocultar ? 'scale-0' : 'collapse scale-y-100'}`}>
                        <li className={`${ocultar ? 'hidden' : 'visible'}`}>
                            <Link
                                to="/faq"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                                <i className="fa-solid fa-circle-question text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                                <span className="font-medium text-gray-700 dark:text-gray-200">
                                    FAQ
                                </span>
                            </Link>
                        </li>
                        <li className={`${ocultar ? 'hidden' : 'visible'}`}>
                            <Link
                                to="/favorites"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                                <i className="fa-solid fa-star text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                                <span className="font-medium text-gray-700 dark:text-gray-200">
                                    Favoritos
                                </span>
                            </Link>
                        </li>
                        <li className={`${ocultar ? 'hidden' : 'visible'}`}>
                            <Link
                                to="/categories"
                                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 group"
                            >
                                <i className="fa-solid fa-list text-red-500 text-lg group-hover:scale-110 transition-transform duration-200" />
                                <span className="font-medium text-gray-700 dark:text-gray-200">
                                    Categorías
                                </span>
                            </Link>
                        </li>
                        {/* Carrusel dentro de la lista */}
                        <li className={`${ocultar ? 'hidden' : 'visible'}`}>
                            <div className="relative w-full max-w-sm mx-auto">
                                <div className="overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src={images[currentSlide]}
                                        alt={`Slide ${currentSlide + 1}`}
                                        className="w-full h-auto"
                                    />
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={handlePrev}
                                        className="bg-gray-700 text-white px-2 py-2 rounded-lg"
                                    >
                                        ‹ Anterior
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="bg-gray-700 text-white px-2 py-2 rounded-lg"
                                    >
                                        Siguiente ›
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button
                        className="mt-4 p-2 rounded bg-red-500 text-xl text-white font-bold w-full"
                        onClick={handleClick}
                    >
                        {ocultar === false ? 'Cerrar Aside' : 'Abrir Aside'}
                    </button>
                </nav>
            </div>
        </div>
    );
};