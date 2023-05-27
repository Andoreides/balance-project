import balance from "../Balance/Balance";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

const initialState = {
    balance: 1000,
    inputBalance: '',
    inputSpending: '',
    inputIncome: '',
    inputCategorySpends: '',
    inputCategoryIncome: '',
}

export const CHANGE_BALANCE = 'CHANGE_BALANCE';
export const CHANGE_INPUT_BALANCE = 'CHANGE_INPUT_BALANCE';
export const CHANGE_INPUT_SPENDING = 'CHANGE_INPUT_SPENDING';
export const CHANGE_INPUT_INCOME = 'CHANGE_INPUT_INCOME';
export const CHANGE_INPUT_CATEGORY_SPENDS = 'CHANGE_INPUT_CATEGORY_SPENDS';
export const CHANGE_INPUT_CATEGORY_INCOME = 'CHANGE_INPUT_CATEGORY_INCOME';

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_BALANCE': {
            return {...state, balance: action.payload }
        }
        case 'CHANGE_INPUT_BALANCE': {
            return {...state, inputBalance: action.payload}
        }
        case 'CHANGE_INPUT_SPENDING': {
            return {...state, inputSpending: action.payload}
        }
        case 'CHANGE_INPUT_INCOME': {
            return {...state, inputIncome: action.payload}
        }
        case 'CHANGE_INPUT_CATEGORY_SPENDS': {
            return {...state, inputCategorySpends: action.payload}
        }
        case 'CHANGE_INPUT_CATEGORY_INCOME': {
            return {...state, inputCategoryIncome: action.payload}
        }
        default: return state;

    }
}