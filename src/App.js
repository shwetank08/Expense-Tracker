import React, { useEffect, useState } from 'react';
import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import List from './components/List'

const App = () => {

  const EXPENSE = localStorage.getItem('item')
    ?JSON.parse(localStorage.getItem('item'))
    :[]

  const [item, setItem] = useState(EXPENSE);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  
  useEffect(()=>{
    localStorage.setItem('item',JSON.stringify(item))
  },[item])
  
  
  const handleSubmit = e => {
    e.preventDefault()
    if(name!=='' && amount>0){
        const newobj = {name, amount}
        setItem([...item, newobj])
        setName('')
        setAmount('')
    }else{
      console.log('Invalid expense name or the amount')
    }
  }
  
  const handleName = e => {
    setName(e.target.value);
  }
  const handleAmount = e => {
    setAmount(e.target.value);
  }
  const handleDelete = (index) => {
    const newItem = [...item];
    newItem.splice(index,1);
    setItem(newItem)
  }
  const handleDeleteAll = () => {
    setItem([])
  }
  

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5 text-primary text-uppercase">Expense Tracker</h1>
      <div>
        <p className="text-dark text-center md-3">
          <b>Total Expense: {' '}
          <span className="text-success">
            ${' '}
            {
              item.reduce((accumalator, currentValue)=>{
                return (accumalator+=parseInt(currentValue.amount))
              },0)
            }
          </span>
          </b>
        </p>
      </div>
      <Form 
      name={name}
      amount={amount}
      handleSubmit={handleSubmit}
      handleAmount={handleAmount}
      handleName={handleName}
      handleDeleteAll={handleDeleteAll}
      />
      <List item = {item} handleDelete={handleDelete}/>
    </Container>
  );
}

export default App;
