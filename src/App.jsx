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
import CustomerList from './components/customerList'

function App() {
  const [holdListOPen,setHoldListOPen] = useState(false)
  function toggleHoldList(){
    setHoldListOPen(!holdListOPen)
  }
  const [addCustomer,setAddCustomer] = useState(false)
  function toggleAddCustomer(){
    setAddCustomer(!addCustomer)
  }
  const[customerList,setCustomerList] = useState(false)
  const toggleCustomerList = () => {
    setCustomerList(!customerList)
  }
  const[manage,setManage] = useState(false)
  const toggleManage = () => {
    setManage(!manage)
  }

  return (
    <div className='bg-primary-bg'>
      <div className=''>
        <Header />
        <SubHeader toggleAddCustomer={toggleAddCustomer} toggleCustomerList = {toggleCustomerList} toggleHoldList={toggleHoldList} toggleManage={toggleManage}/>
        <ManageCustomer manage={manage} toggleManage={toggleManage}/>
        <AddCustomer addCustomer={addCustomer} toggleAddCustomer={toggleAddCustomer}/>
        <HoldList holdListOPen={holdListOPen}/>
        <CustomerList customerList = {customerList}/>
        <Hero />
      </div>
    </div>
  )
}

export default App
