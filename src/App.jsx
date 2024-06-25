import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import SubHeader from './components/subHeader'
import Hero from './components/hero'
import ManageCustomer from './components/manageCustomer'
import AddCustomer from './components/addCustomer'
import HoldList from './components/holdList'
import Cornfirm from './components/confirm'
import MultiplePayment from './components/multiplePayment'

function App() {
 
  const [holdListOPen,setHoldListOPen] = useState(false)
  function toggleHoldList(){
    setHoldListOPen(!holdListOPen)
  }
  const [addCustomer,setAddCustomer] = useState(false)
  function toggleAddCustomer(){
    setAddCustomer(!addCustomer)
  }
  const[confirm,setConfirm] = useState(false)
  const toggleConfirm = () => {
    setConfirm(!confirm)
  }
  const[multiplePayments,setMultiplePayments] = useState(false)
  const toggleMultiplePayments = () => {
    setMultiplePayments(!multiplePayments)
  }

  const[manageCustomer,setManageCustomer] = useState(false)
  const toggleManage = () => {
    setManageCustomer(!manageCustomer)
  }

  return (
    <div className='bg-primary-bg'>
      <div className=''>
        <Header />
        <SubHeader toggleAddCustomer={toggleAddCustomer} toggleHoldList={toggleHoldList}  toggleManage={toggleManage}/>
        <ManageCustomer manageCustomer={manageCustomer} toggleManage={toggleManage}/>
        <AddCustomer addCustomer={addCustomer} toggleAddCustomer={toggleAddCustomer}/>
        <HoldList holdListOPen={holdListOPen}/>
        <Cornfirm confirm={confirm} toggleConfirm={toggleConfirm} toggleMultiplePayments={toggleMultiplePayments}/>
        <MultiplePayment multiplePayments={multiplePayments} toggleMultiplePayments={toggleMultiplePayments}/>
        <Hero toggleConfirm={toggleConfirm}/>
      </div>
    </div>
  )
}

export default App
