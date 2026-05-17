const CandidateModal = ({ selected, closeModal }) => {
  if (!selected) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl w-[90%] md:w-[450px]">
        <h2 className="text-2xl font-bold mb-4">
          {selected.name}
        </h2>

        <p><strong>Email:</strong> {selected.email}</p>
        <p><strong>Role:</strong> {selected.role}</p>
        <p><strong>Score:</strong> {selected.score}</p>
        <p><strong>Status:</strong> {selected.status}</p>

        <button
          onClick={closeModal}
          className="mt-5 bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default CandidateModal