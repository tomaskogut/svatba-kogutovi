type ModalProps = {
  title: string
  message: string
  onClose: () => void
}

export default function Modal({ title, message, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-[#fbf5fb] rounded-lg shadow-lg p-6 max-w-sm text-center">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#d497d5] text-white px-4 py-2 rounded hover:bg-[#a777a8] transition"
        >
          OK
        </button>
      </div>
    </div>
  )
}
