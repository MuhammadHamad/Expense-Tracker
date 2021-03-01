import React, { useContext, useState } from 'react'
import { TransactionContext } from './TransContext';

function Child() {

    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);

    const handleAddition = (e) => {
        e.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter a correct value");
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc,
        });
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount;
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount;
        }
        return expense;
    }

    return (
        <div className="container">
            <h1 className="text-center"> Expense Tracker</h1>

            <h3 className="total"> Your Income <br /> {getIncome() + getExpense()}</h3>

            <div className="expense-container">
                <h4>INCOME <br /> {getIncome()} </h4>
                <h4>EXPENSE <br /> {getExpense()} </h4>
            </div>

            <h3>History</h3>
            <hr />

            <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (
                        <li>
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    )
                })}
            </ul>

            <h3>Add new Transaction</h3>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" onChange={(e) => setDesc(e.target.value)} required />
                </label>

                <br />

                <label>
                    Enter Amount <br />
                    <input type="number" onChange={(e) => setAmount(e.target.value)} required />
                </label>

                <br />

                <input type="submit" value="Add Transaction" className="btn" />
            </form>
        </div>
    )
}

export default Child
