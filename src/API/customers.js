import {instance} from "./index";

export const getQueryCustomers = () => {
    return instance.get('employees.json');
};




