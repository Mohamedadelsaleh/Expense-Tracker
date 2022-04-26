import React, {useContext}from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpences = () => {

    const {transitions} = useContext(GlobalContext)
    const amounts = transitions.map(transition => transition.amount);
    const income = amounts.filter(plus => plus > 0).reduce((acc,plus)=>(acc += plus),0).toFixed(2)
    const expense = (amounts.filter(minus => minus < 0).reduce((acc,minus)=> (acc += minus),0)*-1).toFixed(2)
    
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expense}</p>
            </div>
        </div>
    )
}
