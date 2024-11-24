import {Expenses} from "../model/Expense.ts";
import {Link} from "react-router-dom";

interface Props {
    expenses: Expenses[]
}


const ExpenseList = ({expenses}:Props) => {

    return (
        <div className="card">
            <h5 className="card-header">
                Expense
                <span className="float-end">Amount</span>
            </h5>
            <div className="card-body">
                {expenses.map((expense) => (
                    <Link
                        key={expense.expenseId}
                        to={`/view/${expense.expenseId}`}
                        style={{textDecoration: "none"}}
                    >
                        <div className="d-flex justify-content-between border-bottom-1 p-3 text-dark">
                            <div className="card-title m-0">
                                <h5>{expense.name}</h5>
                                <span className="fst-italic">{(expense.date)}</span>
                            </div>
                            <div className="card-subtitle">
                                <span className="badge rounded-pill app-primary-bg-color">{((expense.amount))}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default ExpenseList
