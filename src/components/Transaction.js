import React, { Fragment, useContext}from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transition}) => {
    const {deleteTransition} = useContext(GlobalContext)

    const sign = transition.amount < 0 ? '-' : '+';
    const stylingList = transition.amount < 0 ? 'minus' : 'plus';
    
    return (
        <Fragment>
            <li className={stylingList}>
                {transition.text}<span>{sign}${Math.abs(transition.amount)}</span>
                <button className="delete-btn" onClick={()=>deleteTransition(transition.id)}>X</button>
            </li>
        </Fragment>
    )
}
