import DataVisualizer from './component/DataVisualirzer/DataVisualizer';
import Container from './component/UI/Container/Container';
import Banner from './component/Banner/Banner';
import AddIncome from './component/AddIncome/AddIncome';
import AddExpense from './component/AddExpense/AddExpense';
import Log from './component/Log/Log';
import ModalOverlay from './component/Modal/ModalOverlay'
import Menu from './component/Menu/Menu'
import { useState } from 'react'
import './App.css'

function App() {
  const [detailError, setDetailError] = useState(false)
  const [categoryError, setCategoryError] = useState(false)
  const [amountError, setAmountError] = useState(false)
  const [addExpenseSuccess, setAddExpenseSuccess] = useState(false)
  const [addIncomeSuccess, setAddIncomeSuccess] = useState(false)

  const onShowExpenseModal = () => { setAddExpenseSuccess(true) }
  const onShowIncomeModal = () => { setAddIncomeSuccess(true) }
  const onDetailErrorHandler = () => { setDetailError(true); }
  const onCategoryErrorHandler = () => { setCategoryError(true); }
  const onAmountErrorHandler = () => { setAmountError(true); }
  const onCloseModalHandler = () => {
    setAmountError(false)
    setCategoryError(false)
    setDetailError(false)
    setAddExpenseSuccess(false)
    setAddIncomeSuccess(false)
  }

  const errorHandlingProp = {
    onDetailError: onDetailErrorHandler,
    onCategoryError: onCategoryErrorHandler,
    onAmountError: onAmountErrorHandler
  }

  const detailErrorProp = {
    header: 'Invalid Detail',
    modalMessage: 'Please Enter Some Detail'
  }
  const categoryErrorProp = {
    header: 'Invalid Category',
    modalMessage: 'Please Select Some Category'
  }
  const amountErrorProp = {
    header: 'Invalid Amount',
    modalMessage: 'Amount Should Be Greater Than Zero'
  }
  const addIncomeSuccessProp = {
    header: 'Success !',
    modalMessage: 'New Income Added !'
  }
  const addExpenseSuccessProp = {
    header: 'Success !',
    modalMessage: 'New Expense Added'
  }

  const reloadPage = () => { window.location.reload() }

  return (
    <Container>
      {addIncomeSuccess && <ModalOverlay onCloseModal={onCloseModalHandler} {...addIncomeSuccessProp} onClickButton={reloadPage} />}
      {addExpenseSuccess && <ModalOverlay onCloseModal={onCloseModalHandler} {...addExpenseSuccessProp} onClickButton={reloadPage} />}
      {detailError && <ModalOverlay onCloseModal={onCloseModalHandler} {...detailErrorProp} />}
      {categoryError && <ModalOverlay onCloseModal={onCloseModalHandler} {...categoryErrorProp} />}
      {amountError && <ModalOverlay onCloseModal={onCloseModalHandler} {...amountErrorProp} />}
      <Banner reloadPage={reloadPage} />
      <DataVisualizer />
      <AddIncome {...errorHandlingProp} onSuccess={onShowIncomeModal} />
      <AddExpense {...errorHandlingProp} onSuccess={onShowExpenseModal} />
      <Log />
    </Container>
  );
}

export default App;
