import {useEffect, useState} from "react";
import {Expenses} from "../model/Expense.ts";
import {getExpenses} from "../services/expense-service.ts";

const useExpenses = () => {

    const [expenses, setExpenses]  = useState<Expenses[]>([]);
    const [error, setErrors] = useState(null);
    const [isLoading, setLoader] = useState(false)

    useEffect(() => {

        setLoader(true);

        getExpenses().then(response => {
            setExpenses(response.data);
        })
            .catch(error => setErrors(error.message))
            .finally(()=> setLoader(false));
    },[])

    return {expenses, error, isLoading}

}

export default useExpenses;