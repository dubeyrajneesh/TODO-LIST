import { useDispatch } from "react-redux";
import { toggleTab } from "../../Redux/Action/Action";

const TOGGLE_TAB = 'TOGGLE_TAB';
 const ALL_TODOS = 'All Todos';
 const ACTIVE_TODOS = 'Active Todos';
 const DONE_TODOS = 'Done Todos';
 const TABS = [ALL_TODOS, ACTIVE_TODOS, DONE_TODOS];

const Tabs = ({ currentTab }) => {

    const dispatch = useDispatch();

    return (
        TABS.map(tab => (
            <button
                className={tab === currentTab ? 'button selected' : 'button'}
                onClick={() => dispatch(toggleTab(tab))}
            >
                {tab}
            </button>
        ))
    )
}

export default Tabs;