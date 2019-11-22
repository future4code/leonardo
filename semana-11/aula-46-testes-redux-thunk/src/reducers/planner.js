export const initialState = {
    tasks: []
};

export const planner = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TASK":
            return { ...state, tasks: action.payload.tasks };
        default:
            return state;
    }
};

export default planner;