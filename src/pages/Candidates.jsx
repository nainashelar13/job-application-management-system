import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CandidateCard from '../components/CandidateCard'
import CandidateModal from '../components/CandidateModal'
import { candidates } from '../data/data'

const Candidates = () => {
  const [selected, setSelected] = useState(null)
  const [search, setSearch] = useState('')

  const filtered = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              Candidates
            </h1>

            <input
              type="text"
              placeholder="Search Candidate"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                onClick={setSelected}
              />
            ))}
          </div>
        </div>
      </div>

      <CandidateModal
        selected={selected}
        closeModal={() => setSelected(null)}
      />
    </div>
  )
}

export default Candidates