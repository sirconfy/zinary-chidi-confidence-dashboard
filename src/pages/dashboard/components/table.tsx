import { DataTable } from '@/pages/shareComponent/tableComponent'
// import moment from 'moment';

const Table = () => {
  type RowType = {
    id: number
    sn: string
    name: string
    tr: string
    type: string
    amount: string
    date: string
    status: string
  }

  const columns = [
    {
      accessorKey: 'sn',
      header: () => <div className='text-[12px] text-white'>S/N</div>,
    },
    {
      accessorKey: 'name',
      header: () => (
        <div className='flex items-center justify-center gap-3 text-[12px] text-white'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='currentColor'
              className='bi bi-caret-up-fill fill-white'
              viewBox='0 0 16 16'
            >
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='currentColor'
              className='bi bi-caret-down-fill fill-white'
              viewBox='0 0 16 16'
            >
              <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
            </svg>
          </div>
          <span className='text-white'>Name</span>
        </div>
      ),
    },
    {
      accessorKey: 'tr',
      header: () => (
        <div className='text-[12px] text-white'>Transaction Reference</div>
      ),
    },
    {
      accessorKey: 'type',
      header: () => <div className='text-[12px] text-white'>Type</div>,
    },
    {
      accessorKey: 'amount',
      header: () => <div className='text-[12px] text-white'>Amount</div>,
    },
    {
      accessorKey: 'date',
      header: () => (
        <div className='flex items-center justify-center gap-3 text-[12px] text-white'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='currentColor'
              className='bi bi-caret-up-fill fill-white'
              viewBox='0 0 16 16'
            >
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='currentColor'
              className='bi bi-caret-down-fill fill-white'
              viewBox='0 0 16 16'
            >
              <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
            </svg>
          </div>
          <span className='text-white'>Date</span>
        </div>
      ),
    },
    {
      accessorKey: 'status',
      header: () => (
        <div className='flex items-center justify-center gap-3 text-[12px] text-white'>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='currentColor'
              className='bi bi-caret-up-fill fill-white'
              viewBox='0 0 16 16'
            >
              <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='8'
              height='8'
              fill='currentColor'
              className='bi bi-caret-down-fill fill-white'
              viewBox='0 0 16 16'
            >
              <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
            </svg>
          </div>
          <span className='text-white'>Status</span>
        </div>
      ),

      cell: ({ row }) => {
        const status = row.original.status
        let bgColor
        if (status === 'Successful') bgColor = '#31D067'
        else if (status === 'Failed') bgColor = '#EA523D'
        else if (status === 'Pending') bgColor = '#FFA349'

        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: bgColor,
              padding: '0.1rem 0.5rem',
              borderRadius: '5rem',
              color: 'white',
              fontSize: '10px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                backgroundColor: 'white',
                borderRadius: '50%',
                marginRight: '0.5rem',
              }}
            ></span>
            {status}
          </div>
        )
      },
    },
    {
      accessorKey: 'action',
      header: () => <div className='text-[12px] text-white'>Action</div>,
      cell: ({ row }) => {
        return (
          <div className='flex items-center justify-center space-x-2'>
            <button className='rounded bg-[#EC681C] px-3 py-1 text-[12px] text-white'>
              View
            </button>
          </div>
        )
      },
    },
  ]

  const rows: RowType[] = [
    {
      id: 1,
      sn: '0000001',
      name: 'Tife Balogun',
      tr: 'tanya.hill@example.com',
      type: 'Deposit',
      amount: '₦34,694.145',
      date: 'Dec 4, 2019 21:42',
      status: 'Successful',
    },
    {
      id: 2,
      sn: '0000002',
      name: 'Chidi Confidence',
      tr: 'csirconfy@gmail.com',
      type: 'Withdrawal',
      amount: '₦34,694.145',
      date: 'May 10, 2024 21:42',
      status: 'Failed',
    },
    {
      id: 3,
      sn: '0000003',
      name: 'Mr Johnson Emmanuel',
      tr: 'confidenceconfy@gmail.com',
      type: 'Payments',
      amount: '₦34,694.145',
      date: 'May 10, 2024 21:42',
      status: 'Pending',
    },
  ]

  return (
    <div>
      <DataTable columns={columns} data={rows} />

      <div className='mt-8 flex items-center justify-center space-x-2'>
        <button className='rounded bg-[#EC681C] px-3 py-1 text-[14px]  font-semibold text-white '>
          View All
        </button>
      </div>
    </div>
  )
}

export default Table
