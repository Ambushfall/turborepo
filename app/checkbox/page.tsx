'use client'
import { useState } from "react";
import styles from '../page.module.css'
const getFormattedPrice = (price: number) => `$${price.toFixed(2)}`;
const { main } = styles

const toppings = [
    {
      name: "Capsicum",
      price: 1.2
    },
    {
      name: "Paneer",
      price: 2.0
    },
    {
      name: "Red Paprika",
      price: 2.5
    },
    {
      name: "Onions",
      price: 3.0
    },
    {
      name: "Extra Cheese",
      price: 3.5
    },
    {
      name: "Baby Corns",
      price: 3.0
    },
    {
      name: "Mushroom",
      price: 2.0
    }
  ];

export default function TopingApp() {
    const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
    );

    const [total, setTotal] = useState(0);

    //Separate `updateTotal` logic for avoiding duplication
    const updateTotal = (checkboxValues: any[]) => {
        const totalPrice = checkboxValues.reduce((sum, currentState, index) => {
            if (currentState === true) {
                return sum + toppings[index].price;
            }
            return sum;
        }, 0);

        setTotal(totalPrice);
    };

    const handleOnChange = (position: any) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        console.log(updatedCheckedState);
        setCheckedState(updatedCheckedState);
        //update total
        updateTotal(updatedCheckedState);
    };

    const handleSelectAll = (event: any) => {
        //filled all checkboxes' states with `Check All` value
        const updatedCheckedState = new Array(toppings.length).fill(
            event.target.checked
        );

        setCheckedState(updatedCheckedState);
        //update total
        updateTotal(updatedCheckedState);
    };

    // console.log(checkedState.every((value) => value));

    return (
        <div className={main}>
            <h3>Select Toppings</h3>
            <div className="call">
                <input
                    type="checkbox"
                    name="checkall"
                    checked={checkedState.every((value) => value === true)}
                    onChange={handleSelectAll}
                />
                <label htmlFor="checkall">Check All</label>
            </div>
            <ul className="toppings-list">
                {toppings.map(({ name, price }, index) => {
                    return (
                        <li key={index}>
                            <div className="toppings-list-item">
                                <div className="left-section">
                                    <input
                                        type="checkbox"
                                        // id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                    <label>{name}</label>
                                </div>
                                <div className="right-section">{getFormattedPrice(price)}</div>
                            </div>
                        </li>
                    );
                })}
                <li>
                    <div className="toppings-list-item">
                        <div className="left-section">Total:</div>
                        <div className="right-section">{getFormattedPrice(total)}</div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
