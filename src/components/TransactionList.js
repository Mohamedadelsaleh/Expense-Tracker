import React, {Fragment, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import {Transaction} from './Transaction'
export const TransactionList = () => {

    const {transitions} = useContext(GlobalContext)
    
    return (
        <Fragment>
            <h3>History</h3>
            <ul className="list">
                {transitions.map((transition) => (<Transaction transition={transition} key={transition.id} />)
                )}
            </ul>
        </Fragment>
    )
}
