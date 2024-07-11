import { useState } from 'react'
import { Button } from '@/components/custom/button'
import { Calendar } from '@/components/ui/calendar'

export default function Overviews() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible)
  }

  return (
    <div>
      <div className='mb-2 mt-2 flex items-center justify-between space-y-2'>
        <h1 className='text-xl font-semibold tracking-tight text-[#505050]'>
          Wallet Overview
        </h1>
        <div className='relative inline-block text-left'>
          <div className='flex items-center space-x-2'>
            <p className='text-[16px] text-[#505050]'>Duration</p>
            <Button
              variant='outline'
              onClick={toggleDropdown}
              className='flex w-24 justify-between rounded-md border border-[#A8A8A8] bg-white px-2 text-black'
            >
              <span className='text-[12px]'>Today</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='10'
                height='10'
                fill='currentColor'
                className='bi bi-caret-down-fill fill-[#A8A8A8]'
                viewBox='0 0 16 16'
              >
                <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
              </svg>
            </Button>
          </div>
          {dropdownVisible && (
            <div className='absolute right-4 z-10  mt-2 origin-top-right rounded-md bg-white shadow-lg  ring-black ring-opacity-5'>
              <div className='py-1'>
                <div className='w-full bg-white py-2 text-center'>
                  <Calendar
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    className='w-full rounded-md border '
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
