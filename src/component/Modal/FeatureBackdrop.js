import classes from './FeatureBackdrop.module.css'

const FeatureBackdrop = (props) => {
  return <div className={classes.FeatureBackdrop} onClick={props.onCloseModal}>{props.children}</div>
}

export default FeatureBackdrop