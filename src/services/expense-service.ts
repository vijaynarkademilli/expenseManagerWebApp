import apiClient from "../config/api-client.ts";
import {Expenses} from "../model/Expense.ts";

export const getExpenses = () => {
    return apiClient.get<Expenses[]>('/expenses');
}