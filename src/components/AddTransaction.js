import React , {Fragment , useState,useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransition} = useContext(GlobalContext)
    
    const newTransaction = (e) => {
        e.preventDefault();
        const userTransaction = {
            id:Math.floor(Math.random() * 100000),
            text,
            amount:+amount,
        }
        addTransition(userTransaction);
        // sessionStorage.setItem(`transaction-${userTransaction.id}`, JSON.stringify(userTransaction))
        setText('')
        setAmount('')
    }

    return (
        <Fragment>
            <h3>Add New Transaction</h3>
            <form onSubmit={newTransaction}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text"  value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Text...." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/> (Negative - Expense , Positive - Income ) </label>
                    <input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter Amount...."/>
                </div>
                <button className="btn" >Add Transaction</button>
            </form>
        </Fragment>
    ) 
}
