import '../../styles/buttons.scss'

const ShuffleBtn = ({ onClick, disabled }) => {
  return (
    <button
      className="btn-0"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      Shuffle
    </button>
  )
}

export default ShuffleBtn
