import React from 'react'
import PlaceholderDocument from './PlaceholderDocument'

function Documents() {
  return (
    <div 
    className='flex flex-wrap p-5 dark:bg-gray-700 bg-gray-100 justify-center lg:justify-start rounded-sm 
    gap-5 max-w-7xl mx-auto'>
        {/* Map through docs */}
    <PlaceholderDocument />
    </div>
  )
}

export default Documents
