import FeatureBackdrop from '../Modal/FeatureBackdrop'
import Form from "../UI/Form/Form"

const AddIncome = (props) => {

  async function addIncomeHandler(newIncome) {
    console.log('execute addincome handler')
    const res = await fetch('https://react-http-e9374-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json', {
      method: 'POST',
      body: JSON.stringify(newIncome),
      header: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    console.log(data)
    props.onSuccess()
  }



  const AddIncomeProp = {
    header: 'Add Income',
    symbol: 'Add',
    onEvent: addIncomeHandler,
    action: 'Income'
  }

  const datalist = ['Salary', 'Part-Time', 'Reward'].map((el) => {
    return <option key={el} value={el}>{el}</option>
  })

  return (
    <Form {...AddIncomeProp} {...props} datalist={datalist} />
  )
}

export default AddIncome