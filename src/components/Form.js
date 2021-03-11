import React from 'react';
import {FormGroup, Button, Col, Form as BTForm} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = ({name, amount, handleName, handleAmount, handleSubmit, handleDeleteAll}) => {
    return(
    <BTForm style={{margin: 10}} onSubmit={handleSubmit}>
        <FormGroup>
            <Col>
            <label className="text-dark mt-3 mb-3"><b>Name of Expense</b></label>
            <input 
                type="text"
                name="name"
                className="container-fluid"
                id="expenseName"
                placeholder="Name of expense..."
                value={name}
                onChange={handleName}
            />
            </Col>
        </FormGroup>
        <FormGroup>
            <Col>
            <label><b>$ Amount</b></label>
            <input
                type="number"
                name="amount"
                id="expenseAmount"
                className="container-fluid"
                placeholder="0.00"
                value={amount}
                onChange={handleAmount}
            />
            </Col>
        </FormGroup>
        <Button type="submit" variant="outline-success" className="text-uppercase">
                    ADD
        </Button>{" "}
        <Button type="submit" variant="outline-danger" className="text-uppercase" onClick={handleDeleteAll}>
                    Clear List
        </Button>
    </BTForm>
    );
}

export default Form;