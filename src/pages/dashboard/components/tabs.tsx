import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useEffect, useState } from 'react'
import { Search } from '@/components/search'
import Table from './table'
import TableWithdrawals from './tableTabs/TableWithdrawals'
import TableDeposits from './tableTabs/TableDeposits'
import TablePayments from './tableTabs/TablePayments'

export default function TableTabs() {
  const [activeTab, setActiveTab] = useState('All')

  const handleTabClick = (value) => {
    setActiveTab(value) // Update active tab state
  }

  useEffect(()=>{
    setActiveTab("All")
  },[])

  console.log(activeTab);

  return (
    <>
      <Tabs
        orientation='vertical'
        defaultValue='All'
        className='mt-12 space-y-4'
      >
        <div className='w-full overflow-x-auto rounded-lg bg-white px-4 py-4 pb-2'>
          <TabsList >
            <TabsTrigger
              value='All'
              onClick={() => handleTabClick('All')}
              className={activeTab === 'All' ? 'e text-[#FF6600]' : ''}
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value='Withdrawals'
              onClick={() => handleTabClick('Withdrawals')}
              className={activeTab === 'Withdrawals' ? 'text-[#FF6600] ' : ''}
            >
              Withdrawals
            </TabsTrigger>
            <TabsTrigger
              value='Deposits'
              onClick={() => handleTabClick('Deposits')}
              className={activeTab === 'Deposits' ? 'text-[#FF6600] ' : ''}
            >
              Deposits
            </TabsTrigger>
            <TabsTrigger
              value='Payments'
              onClick={() => handleTabClick('Payments')}
              className={activeTab === 'Payments' ? 'text-[#FF6600] ' : ''}
            >
              Payments
            </TabsTrigger>
          </TabsList>

          <hr className='mt-2' />

          <div className='mt-4 flex items-center justify-between'>
            <Search />
            <div className='flex items-center justify-center space-x-2'>
              <p className='text-[12px] text-[#bebcbc]'>Display</p>

              <Select>
                <SelectTrigger className=' flex w-[60px] justify-end'></SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value='1'>1</SelectItem>
                    <SelectItem value='2'>2</SelectItem>
                    <SelectItem value='3'>3</SelectItem>
                    <SelectItem value='4'>4</SelectItem>
                    <SelectItem value='5'>5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <p className='text-[12px] text-[#bebcbc]'>Rows</p>
            </div>
          </div>
        </div>

        <TabsContent value={activeTab} className='space-y-4'>
          {/* Render different tables based on activeTab value */}
          {activeTab === 'All' && <Table />}
          {activeTab === 'Withdrawals' && <TableWithdrawals />}
          {activeTab === 'Deposits' && <TableDeposits />}
          {activeTab === 'Payments' && <TablePayments />}
        </TabsContent>
      </Tabs>
    </>
  )
}
