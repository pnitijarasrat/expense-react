import classes from './Banner.module.css'
import { TbRefresh } from 'react-icons/tb'

const Banner = (props) => {
  return (
    <section className={classes.Banner}>
      <h1 >MyLedger</h1>
      < TbRefresh onClick={props.reloadPage} />
    </section >

  )
}

export default Banner