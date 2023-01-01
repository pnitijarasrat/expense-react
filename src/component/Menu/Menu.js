import classes from './Menu.module.css'
import Card from '../UI/Card/Card'

const Menu = (props) => {
  return (
    <div className={classes.Menu}>
      <button onClick={props.onClickIncome}>Income</button>
      <button onClick={props.onClickLog}>Activity</button>
      <button>Expense</button>
      <button>Soon..</button>
    </div>
  )
}

export default Menu