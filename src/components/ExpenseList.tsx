import {Expenses} from "../model/Expense.ts";

interface Props {
    expenses: Expenses[]
}


const ExpenseList = ({expenses}:Props) => {

    return (
        <div>List of Expenses

    <table border={1}>
        <thead>
        <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {expenses.map(expense =>
            <tr key={expense.expenseId}>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
            </tr>
        )}
        </tbody>
    </table>
        </div>
)
}
export default ExpenseList
