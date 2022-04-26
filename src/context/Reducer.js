
const Reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return{
                ...state,
                transitions:state.transitions.filter(transition => transition.id !== action.payload)
            }
        case 'ADD':
            return{
                ...state,
                transitions:[action.payload, ...state.transitions]
            }
        default:
            return state;
    }
}

export default Reducer