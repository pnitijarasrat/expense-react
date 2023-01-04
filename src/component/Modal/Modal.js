import classes from './Modal.module.css'
import Button from '../UI/Button/Button'

const Modal = (props) => {
  return (
    <div className={classes.Modal}>
      <h1>{props.header}</h1>
      <p style={{ width: '100%', overflow: 'auto' }}>{props.modalMessage}</p>
      <Button onClick={props.onClickButton}>Okay</Button>
    </div>
  )
}

export default Modal