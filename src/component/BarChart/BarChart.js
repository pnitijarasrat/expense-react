import { useState, useEffect } from 'react'
import Card from '../UI/Card/Card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import ModalOverlay from '../Modal/ModalOverlay'
import classes from './BarChart.module.css'

const BarChartComponent = () => {
  const [data, setData] = useState([])
  const [barModal, setBarModal] = useState(false)

  const onOpenBarModal = () => { setBarModal(true) }
  const onCloseBarModal = () => { setBarModal(false) }

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

  const dataByMonth = [
    {
      monthInd: 0,
      monthName: 'Jan',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 1,
      monthName: 'Feb',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 2,
      monthName: 'Mar',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 3,
      monthName: 'Apr',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 4,
      monthName: 'May',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 5,
      monthName: 'Jun',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 6,
      monthName: 'Jul',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 7,
      monthName: 'Aug',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 8,
      monthName: 'Sep',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 9,
      monthName: 'Oct',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 10,
      monthName: 'Nov',
      Expense: 0,
      Income: 0
    },
    {
      monthInd: 11,
      monthName: 'Dec',
      Expense: 0,
      Income: 0
    }

  ]

  for (let index in data) {
    for (let month in dataByMonth) {
      if (dataByMonth[month].monthInd === new Date(data[index].date).getMonth()) {
        if (data[index].type === 'Income') {
          dataByMonth[month].Income += parseInt(data[index].amount)
        } else { dataByMonth[month].Expense += parseInt(data[index].amount) }
      }
    }
  }

  const barChartModalProp = {
    header: 'Transaction By Month',
    modalMessage: dataByMonth.map((el) => {
      return <p className={classes.pModal}>{el.monthName} <span style={{ color: 'green' }}>{el.Income}</span> <span style={{ color: 'red' }}>{el.Expense}</span></p>
    })
  }

  return (
    <>
      {barModal && <ModalOverlay {...barChartModalProp} onClickButton={onCloseBarModal} />}
      <Card>
        <BarChart width={200} height={400} data={dataByMonth} layout='vertical'>
          <Bar dataKey="Expense" fill="red" />
          <Bar dataKey="Income" fill="green" />
          <CartesianGrid stroke="#ccc" />
          <XAxis type='number' />
          <YAxis dataKey="monthName" type='category' />
          <Tooltip />
          <Legend />
        </BarChart>
        <button onClick={onOpenBarModal}>Show More</button>
      </Card>
    </>
  )
}

export default BarChartComponent