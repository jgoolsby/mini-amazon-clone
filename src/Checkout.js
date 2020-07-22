import React from 'react'
import { useStateValue } from './StateProvider'

export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return <div className="checkout">

    </div>

}
