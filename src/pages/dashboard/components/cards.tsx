import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import Charts from './charts'

export default function Cards() {

    const cardsData = [
        {
          title: 'Withdrawals',
          amount: 'N3,402,300',
          cases: '722 Cases',
        },
        {
          title: 'Deposits',
          amount: 'N5,102,400',
          cases: '1,122 Cases',
        },
        {
          title: 'Transfers',
          amount: 'N2,805,700',
          cases: '840 Cases',
        },
        {
          title: 'Payments',
          amount: 'N4,908,600',
          cases: '1,310 Cases',
        },
      ];

      const totalWithdrawalsData = Array(4).fill({
        title: 'Total Withdrawals',
        amount: 'N3,402,300',
      });
      
  return (
    <div className='flex gap-4 flex-col xl:flex-row '>
      <div className="bg-white rounded-md p-4 ">
      <div className='grid grid-cols-2 gap-4  '>
      {cardsData.map((card, index) => (
        <Card key={index} className='bg-[#FFF7E5] '>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-[12px] font-medium text-[#505050]'>
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-[16px] font-bold text-[#FF6600]'>{card.amount}</div>
            <p className='text-[12px] text-[#505050] text-muted-foreground'>
              {card.cases}
            </p>
          </CardContent>
        </Card>
      ))}
      </div>
      <div className=' flex justify-between text-white text-[12px]  items-center bg-[#505050]  rounded-lg px-4 py-4 w-full mt-2' >
<p>Total Amount</p>
<p>N3,402,300</p>
    </div>
    </div>

   
    <div  className='bg-[#FF6600] w-[100%] xl:w-[20%] rounded-lg px-4 py-6  xl:mt-0'>
    {totalWithdrawalsData.map((_, index) => (
          <div key={index} className='mb-4'>
            <div className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <p className='text-[12px] font-medium text-white'>
                Total Withdrawals
              </p>
            </div>

            <div>
              <div className='text-[16px] font-bold text-white'>
                N3,402,300
              </div>
              <hr className='bg-white mt-2' />
            </div>
          </div>
        ))}
      </div>
      <div className='w-full xl:w-[45%] xl:mt-0'>
 <Charts />
 </div>
    </div>
      
    
  )
}
