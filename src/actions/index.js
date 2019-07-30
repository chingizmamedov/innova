import { ADD_TODO, STEP_ID, PROJECT_TYPE, BUDGET_INN, SET_PRICE_LIST } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId,
    content
  }
});

export const changeStepId = (stepId) => ({
  type: STEP_ID,
  payload: stepId
});

export const setProject = (projectName) => ({
  type: PROJECT_TYPE,
  payload: projectName
});

export const setBudget = (budgetCost) => ({
  type: BUDGET_INN,
  payload: budgetCost
});

export const setPriceList = (budgetCost) => ({
  type: SET_PRICE_LIST,
  payload: budgetCost
});

export function doubleAdd(stepId, projectName) {
  return dispatch => {
    dispatch(setProject(projectName))
    dispatch(changeStepId(stepId))
  }
}

export function doubleAddBudget(stepId, budgetCost) {
  return dispatch => {
    
    dispatch(changeStepId(stepId))
    dispatch(setBudget(budgetCost))
  }
}