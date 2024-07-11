import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
)

const labels = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

const data = {
  labels: labels,
  datasets: [
    {
      label: 'First Dataset',
      data: [
        25.5, 26.8, 26.4, 27, 25.4, 26.6, 25.5, 27.5, 26.5, 26.5, 27, 25.8,
      ],
      fill: false,
      borderColor: 'rgb(255, 99, 132, 0.5)',
      tension: 0.4, // Adjust this value for smoother curves
      pointRadius: 0, // Hide points
    },
    {
      label: 'Second Dataset',
      data: [26.5, 26.8, 27.4, 28, 29, 27, 26.7, 25.8, 26, 26.5, 27, 25.8],
      fill: false,
      borderColor: 'rgb(255, 159, 64, 0.5)',
      tension: 0.4, // Adjust this value for smoother curves
      pointRadius: 0, // Hide points
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false, // Hide legend
    },
    tooltip: {
      enabled: false, // Disable tooltips
    },
    title: {
      display: true,
      //   text: 'Chart.js Line Chart'
    },
  },
  scales: {
    y: {
      min: 25,
      max: 30,
    },
  },
}

const Charts = () => {
  return (
    <div className=''>
      <Card className=''>
        <CardHeader>
          <CardTitle>Real-Time Update</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='-mt-8'>
            <Line data={data} options={options} />
          </div>

          <div className='mt-5 flex items-center  justify-between rounded-lg bg-[#F4F4F4] px-10 py-2'>
            <div className='flex items-center justify-center space-x-1'>
              <span className='h-2 w-2 rounded-full bg-[#FFDB8B]' />
              <p className='tex-[#505050] text-[12px]'>Withdrawal</p>
            </div>
            <div className='flex items-center justify-center space-x-1'>
              <span className='h-2 w-2 rounded-full bg-[#F29560]' />
              <p className='tex-[#505050] text-[12px]'>Deposit</p>
            </div>
            <div className='flex items-center justify-center space-x-1'>
              <span className='h-2 w-2 rounded-full bg-[#C4C4C4]' />
              <p className='tex-[#505050] text-[12px]'>Payment</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Charts
