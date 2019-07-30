import { ADD_TODO, STEP_ID, PROJECT_TYPE, BUDGET_INN, SET_STAGE, SET_TIME } from "../actions/actionTypes";

const initialState = {
  stepId: 1,
  projectType: [],
  budget: [],
  projectStage: '',
  startTime: '',
  priceList: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return stepId;
    }
    case STEP_ID: {
      return {
        stepId: action.payload,
        projectType: state.projectType,
        budget: state.budget,
        projectStage: state.projectStage,
        startTime: state.startTime
      }
    }
    case PROJECT_TYPE: {
      return {
        stepId: state.stepId,
        projectType: action.payload,
        budget: state.budget,
        projectStage: state.projectStage,
        startTime: state.startTime
      }
    }
    case BUDGET_INN: {
      return {
        stepId: state.stepId,
        projectType: state.projectType,
        budget: action.payload,
        projectStage: state.projectStage,
        startTime: state.startTime
      }
    }
    case SET_STAGE: {
      return {
        stepId: state.stepId,
        projectType: state.projectType,
        budget: state.budget,
        projectStage: action.payload,
        startTime: state.startTime
      }
    }
    case SET_TIME: {
      return {
        stepId: state.stepId,
        projectType: state.projectType,
        budget: state.budget,
        projectStage: state.projectStage,
        startTime: action.payload
      }
    }
    default:
      return state;
  }
}
