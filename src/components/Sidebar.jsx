import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-slate-900 text-white w-64 min-h-screen p-5">
      <h2 className="text-xl font-bold mb-8">Menu</h2>

      <div className="flex flex-col gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/candidates">Candidates</Link>
      </div>
    </div>
  )
}

export default Sidebar