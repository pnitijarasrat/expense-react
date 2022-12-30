const dummyData = [
  {
    type: 'Coffee',
    amount: 150,
    color: 'red'
  },
  {
    type: 'Lunch',
    amount: 200,
    color: 'blue'
  },
  {
    type: 'Breakfast',
    amount: 150,
    color: 'green'
  }
]

const label = []
for (let data in dummyData) {
  label.push(dummyData[data].type)
  console.log(label)
}