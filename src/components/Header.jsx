import React from 'react'

const Header = ({category, title}) => {
  return (
    <div>
      <div className='mb-10 dark:bg-secondary-dark-bg'>
        <p className='text-gray-400 dark:text-white'>
          {category}
        </p>
        <p className='font-exrtrabold text-3xl tracking-tight text-slate-900 dark:text-white'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default Header