import { useState } from 'react'
import { Search } from '@/components/search'
import { Layout } from '@/components/custom/layout'

export default function TopNav() {
    // State to toggle search visibility
 const [searchVisible, setSearchVisible] = useState<boolean>(false);

 // Function to toggle search visibility
 const toggleSearch = () => {
   setSearchVisible(!searchVisible);
 };

  return (
    <>
      <Layout.Header>
      
      <div className='mt-1 w-full rounded-lg bg-white px-4 py-2'>
        <div className=' flex items-center justify-between'>
          <div className='flex items-center space-x-6'>
            <div onClick={toggleSearch} className="cursor-pointer">
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='currentColor'
                className='bi bi-search fill-[#A8A8A8]'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
              </svg>
            </div>

            {searchVisible && <Search />}

          </div>
          <div className='flex items-center space-x-4'>
            <p className='text-[16px] text-[#A8A8A8]'>Sarah Shaibu</p>
            <img src='/public/images/girl.png' alt='girl' />
            <div className='cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-caret-down-fill fill-[#A8A8A8]'
                viewBox='0 0 16 16'
              >
                <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Layout.Header> 
    </>
  )
}
