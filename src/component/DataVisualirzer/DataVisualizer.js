import Card from "../UI/Card/Card"
import { PieChart } from "react-minimal-pie-chart"
import classes from './DataVisualizer.module.css'
import { useEffect, useState } from "react"
import ModalOverlay from '../Modal/ModalOverlay'

const DataVisualizer = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)

  const onShowModalHandler = () => { setShowModal(true) }
  const onCloseModalHandler = () => { setShowModal(false) }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://react-http-e9374-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
        const data = await res.json()
        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])

  let income = []
  let expense = [
    {
      title: 'Foods',
      value: 0,
      color: '#663399'
    },
    {
      title: 'Clothes',
      value: 0,
      color: '#3D5A80'
    },
    {
      title: 'Alcohol',
      value: 0,
      color: '#DFFBFC'
    },
    {
      title: 'Coffee',
      value: 0,
      color: '#304772'
    },
    {
      title: 'Entertainment',
      value: 0,
      color: '#4DA5B2'
    },
    {
      title: 'Study',
      value: 0,
      color: '#6D597A'
    },
    {
      title: 'Transport',
      value: 0,
      color: '#708992'
    }

  ];

  for (let index in data) {
    if (data[index].type === 'Expense') {
      for (let el in expense) {
        if (expense[el].title === data[index].category) {
          expense[el].value += +data[index].amount
        }
      }
    }
    if (data[index].type === 'Income') { income.push(data[index]) }
  }

  const notEmptyExpense = expense.filter((el) => {
    return el.value !== 0
  })

  const totalIncome = income.reduce((total, el) => {
    return total + parseInt(el.amount)
  }, 0)



  const totalExpense = notEmptyExpense.reduce((total, el) => { return total + el.value }, 0)

  const savingPercentage = (totalIncome - totalExpense) * 100 / totalIncome

  const dataVisualizerProp = {
    header: `Total Expense ${totalExpense} THB`,
    modalMessage: notEmptyExpense.map((el) => {
      return <p>{el.title} : {el.value} THB</p>
    })
  }
  return (
    <>
      {showModal && <ModalOverlay onCloseModal={onCloseModalHandler} {...dataVisualizerProp} />}
      <Card className={classes.DataVisualizer}>
        <PieChart
          onClick={onShowModalHandler}
          data={notEmptyExpense}
          label={({ dataEntry }) => { return dataEntry.title }}
          labelStyle={{ fontSize: 5 }}
          className={classes.PieChart}
          labelPosition={60} />
        <h3>Total Income: {totalIncome} THB </h3>
        {totalExpense !== 0 ? <h3>Total Expense: {totalExpense} THB  </h3> : <h3>No Expense Yet !</h3>}
        <h3>Save: {totalIncome - totalExpense} THB [{savingPercentage.toFixed(2)} %]</h3>
      </Card>
    </>
  )
}

export default DataVisualizer