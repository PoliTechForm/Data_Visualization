import React from 'react'

export const Nav = () => {
    return (
        <div className='justify-center flex bg-slate-500 text-center'>

            <div className=''>
                <ul className='flex gap-10 p-5 text-white hover:text-3xl transition-all duration-300 ease-in-out'>
                    <a href="">
                        <li className=''>Inicio</li>
                    </a>
                    <a href="">
                        <li>Productos</li>
                    </a>
                    <a href="">
                        <li>Contacto</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}
