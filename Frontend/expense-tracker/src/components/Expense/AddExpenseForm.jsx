import React, { useState } from "react";
import Entry from "../Inputs/Entry";
import EmojiPickerPopup from '../EmojiPickerPopup';

const AddExpenseForm = ({ onAddExpense }) => {
    const [expense, setExpense] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });

    const handleChange = (key, value) => setExpense({...expense, [key]: value});
  
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddExpense(expense);
    };
  
    return <form onSubmit={handleSubmit}>
        <EmojiPickerPopup
            icon={expense.icon}
            onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />

        <Entry
            value={expense.category}
            onChange={({ target }) => handleChange("category", target.value)}
            label="Category"
            placeholder="Rent, Groceries, etc"
            type="text"
            required
        />

        <Entry
            value={expense.amount}
            onChange={({ target }) => handleChange("amount", target.value)}
            label="Amount"
            placeholder="Enter amount"
            type="number"
            required
        />

        <Entry
            value={expense.date}
            onChange={({ target }) => handleChange("date", target.value)}
            label="Date"
            placeholder="Select date"
            type="date"
            required
        />    

        <div className="flex justify-end mt-6">
            <button
                type="submit"
                className="add-btn add-btn-fill"
            >
                Add Expense
            </button>
        </div>    
    </form>
};

export default AddExpenseForm