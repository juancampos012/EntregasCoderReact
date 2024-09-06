import React from 'react';
import './CarWidget.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CarWidget() {
    const [count, setCount] = React.useState(0);

    const handleClickCar = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className="cart-container">
                <ShoppingCartIcon onClick = {handleClickCar}/>
                <span className="cart-count">{count}</span> 
            </div>
        </>
    );
}

export default CarWidget;
