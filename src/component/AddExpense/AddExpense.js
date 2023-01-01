import Form from "../UI/Form/Form"

const AddExpense = (props) => {

  async function addExpenseHandler(newExpense) {
    const res = await fetch('https://react-http-e9374-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json', {
      method: 'POST',
      body: JSON.stringify(newExpense),
      header: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    props.onSuccess()
  }
  const datalist = ['Foods', 'Clothes', 'Alcohol', 'Coffee', 'Entertainment', 'Study', 'Transport']
    .map((el) => {
      return <option key={el} value={el}>{el}</option>
    })



  const addExpenseProps = {
    header: 'Add Expense',
    symbol: 'Add',
    onEvent: addExpenseHandler,
    action: 'Expense'
  }

  return (
    <Form {...addExpenseProps} {...props} datalist={datalist} />
  )
}

export default AddExpense