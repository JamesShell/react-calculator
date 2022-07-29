import React from 'react'
import { ACTIONS } from './App'

export default function OperationButton({ dispatch, operation }) {
    return <button onClick={() => dispatch({ type: ACTIONS.CHOSE_OPER, payload: { operation } })}>{operation}</button>
}