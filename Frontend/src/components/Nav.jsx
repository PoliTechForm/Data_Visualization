import React from 'react'

export const Nav = () => {
    return (
        <div className='justify-center flex bg-slate-500 text-center'>

            <div>
                <ul className='flex gap-5'>
                    <a href="">
                        <li>Inicio</li>
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
