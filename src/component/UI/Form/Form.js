import Button from "../Button/Button"
import classes from './Form.module.css'
import { useState } from "react"

const Form = (props) => {
  const [detail, setDetail] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const onDetail = (e) => {
    setDetail(e.target.value)
  }

  const onCategory = (e) => {
    setCategory(e.target.value)
  }

  const onAmount = (e) => {
    setAmount(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (detail.trim().length === 0) {
      return props.onDetailError()
    }
    if (category === 'Select Category' || category === '') {
      return props.onCategoryError()
    }
    if (parseInt(amount) <= 0 || amount === '') {
      return props.onAmountError()
    }

    const newOutput = {
      detail: detail,
      category: category,
      amount: parseInt(amount).toFixed(2),
      type: props.action,
      date: new Date()
    }
    props.onEvent(newOutput)
    setDetail('')
    setCategory('')
    setAmount(0)
  }

  return (
    <form
      className={classes.Form}
      onSubmit={onSubmitHandler}
    >
      <h2>{props.header}</h2>
      <input
        type='text'
        id="details"
        name='detail'
        placeholder="Add Some Details"
        onChange={onDetail}
        value={detail}
      />
      <select onChange={onCategory} onBlur={onCategory}>
        <option key="Select Category" value="Select Category">Select Category</option>
        {props.datalist}
      </select>
      <input
        type='number'
        name='amount'
        placeholder='Amount'
        onChange={onAmount}
        value={amount}
      />
      <center>
        <Button
          type={'submit'}>
          {props.symbol}
        </Button>
      </center>
    </form>
  )
}

export default Form