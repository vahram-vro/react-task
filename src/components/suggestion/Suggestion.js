import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getQueryCustomers} from "../../API/customers";
import {setCustomer} from "../../store/customerSlice";
import EmployeesTable from "../tables/EmployeesTable";
import {deleteSuggestions, setSuggestions} from "../../store/suggestionsSlice";


const Suggestion = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.current.currentUser);
    const allCustomers = useSelector(state => state.customer.customers);
    const allSuggestions = useSelector(state => state.suggestion.suggestions);

    useEffect(() => {
        if (allCustomers.length <= 0) {
            getQueryCustomers().then(response => {
                dispatch(setCustomer(response.data))
            }).catch(err => {
                console.log(err)
            })
        }
    }, [allCustomers])

    const handleGoToProfile = () => {
        props.history.push('/profile');
    }

    const handleAdd = (item) => {
        dispatch(setSuggestions(item));
    }

    const handleDelete = (item) => {
        dispatch(deleteSuggestions(item));
    }

    const customers = allCustomers.filter((item) => {
        const suggestion = allSuggestions.find((suggestion) => suggestion.email === item.email);
        // if (!suggestion) {
        //     return (user.country === item.country || user.city === item.city || user.jobTitle === item.jobTitle);
        // }

        return !suggestion;
    });

    return (
        <div>
            <EmployeesTable items={customers} handleAdd={handleAdd}/>
            <EmployeesTable items={allSuggestions} handleDelete={handleDelete}/>

            <button className="btn btn-info"
                    onClick={handleGoToProfile}>Save
            </button>
        </div>
    );
}

export default Suggestion;
