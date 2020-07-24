import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './Reducer';

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button className="subtotal__button">Proceed to Checkjout</button>
        </div>
    )
}
export default Subtotal;
