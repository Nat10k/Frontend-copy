import { CardState } from "../components/interface/AllInterfaceAndTypes";

export const CardInitState: CardState = {
    opened: false,
    content: {}
};

export function CardReducer(state: CardState, action: { type: string; payload?: any }): CardState {
    switch (action.type) {
        case 'OPEN':
            return { ...state, opened: true };
        case 'CLOSE':
            return { ...state, opened: false };
        case 'TOGGLE':
            return {...state, opened: !state.opened};
        case 'SET_CONTENT':
            return { ...state, content: action.payload };
        default:
            return state;
    }
}
