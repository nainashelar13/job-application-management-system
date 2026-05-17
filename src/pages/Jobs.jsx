import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { jobs } from '../data/data'

const Jobs = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">
            Job Listings
          </h1>

          <div className="grid gap-5">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white shadow rounded-xl p-5"
              >
                <h2 className="text-xl font-bold">
                  {job.title}
                </h2>

                <p>{job.company}</p>
                <p>{job.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs