import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SummaryCard from '../components/SummaryCard'
import { summary } from '../data/data'
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const chartData = [
  { name: 'Selected', value: 8 },
  { name: 'Rejected', value: 12 },
  { name: 'Interview', value: 18 },
]

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {summary.map((item, index) => (
              <SummaryCard
                key={index}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow mt-8 p-5 h-[350px]">
            <h2 className="text-xl font-bold mb-5">
              Candidate Analytics
            </h2>

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  outerRadius={100}
                />

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard