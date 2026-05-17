const CandidateCard = ({ candidate, onClick }) => {
  return (
    <div
      onClick={() => onClick(candidate)}
      className="bg-white shadow rounded-xl p-5 cursor-pointer hover:scale-105 transition"
    >
      <h2 className="text-xl font-semibold">
        {candidate.name}
      </h2>

      <p className="text-gray-500 mt-1">
        {candidate.role}
      </p>

      <div className="flex justify-between mt-4">
        <span className="font-bold">
          Score: {candidate.score}
        </span>

        <span
          className={`px-3 py-1 rounded-full text-sm text-white ${
            candidate.status === 'Selected'
              ? 'bg-green-500'
              : candidate.status === 'Interview'
              ? 'bg-yellow-500'
              : 'bg-red-500'
          }`}
        >
          {candidate.status}
        </span>
      </div>
    </div>
  )
}

export default CandidateCard