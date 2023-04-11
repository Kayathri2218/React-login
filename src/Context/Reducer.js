export const initialSate = {
    forms: [],
    edit: []
}

export const stateReducer = (state, action) => {
    console.log("state", state, "action", action);
    switch (action.type) {
        case "Form":
            return {
                ...state,
                forms: action.payload,
            };
        case "Edit":
            return {
                ...state,
                edit: action.payload,
            };
        default: return state;
    }
}