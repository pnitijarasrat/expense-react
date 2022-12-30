import Backdrop from "./Backdrop"
import Modal from "./Modal"

const ModalOverlay = (props) => {
  return (
    <Backdrop {...props}>
      <Modal {...props} />
    </Backdrop>
  )
}

export default ModalOverlay