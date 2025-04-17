import React from 'react'
import { MutatingDots, RotatingLines } from 'react-loader-spinner'

function Footer() {
  return (
    <div className='w-full flex justify-center bg-purple-800'>
        <div className='container flex flex-row text-purple-50 justify-between items-center'>
            <div className='py-5'>
                <h1 className="text-3xl font-extrabold text-purple-50">PharmaCare</h1>
                <p className="text-xl font-medium text-purple-50">Cuidando da sua saúde todos os dias</p>
            </div>

            <p className="text-xl font-medium text-purple-50">© 2025 PharmaCare. Todos os direitos reservados.</p>

        </div>
    </div>
  )
}

export default Footer