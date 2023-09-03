

 const TOGGLE_TAB = 'TOGGLE_TAB';
const ALL_TODOS = 'All Todos';
 const ACTIVE_TODOS = 'Active Todos';
 const DONE_TODOS = 'Done Todos';
const TABS = [ALL_TODOS, ACTIVE_TODOS, DONE_TODOS];


export const tabReducer = (state = ALL_TODOS, action) => {
    switch (action.type) {
        case "TOGGLE_TAB":
            return action.selected
        default: 
            return state;
    }
}