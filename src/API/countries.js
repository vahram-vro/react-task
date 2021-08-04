import {instance} from "./index";

export const getQueryCountries = () => {
    return instance.get('countries.json');
};