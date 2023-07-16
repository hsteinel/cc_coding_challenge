import "./total-price.css"
import Stack from "@mui/material/Stack"
import BigNumber from "bignumber.js";

function TotalPrice({costs}) {
    let totalPrice = costs.reduce((acc, curr) => {
        return acc.plus(curr.calcTotalPrice());
    }, BigNumber(0)).toFixed(2)
    return (
        <div className="total-price">
            <Stack direction="row" spacing={2} alignItems="baseline" justifyContent="flex-end">
                <p>Total Price</p>
                <h3>{totalPrice}€</h3>
            </Stack>
        </div>
    )
}

export default TotalPrice;