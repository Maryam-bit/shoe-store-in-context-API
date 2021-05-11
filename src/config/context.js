import {createContext} from 'react'

const CounterContext = createContext(0);
const CartContext = createContext()
const TotalContext = createContext(0)
const ShippingContext = createContext()

export{CartContext,CounterContext, TotalContext, ShippingContext}