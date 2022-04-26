export default (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return{
                ...state,
                transitions:state.transitions.filter(transition => transition.id !== action.payload)
            }
        default:
            return state;
    }
}