import React from 'react';
import './profile.css';
import {useDispatch} from "react-redux";
import {deleteCurrentUserAndLogOut} from "../../store/currentUserSlice";

const Profile = (props) => {
    const dispatch = useDispatch();

    const handleGoToSuggestionEdit = () => {
        props.history.push('/suggestion_edit');
    }

    const handleGoToPersonalData = () => {
        props.history.push('/personal_data_edit');
    }

    const handleLogOut = () => {
        dispatch(deleteCurrentUserAndLogOut());
        props.history.push('/login');
    }

    return (
        <div>
            <button className="btn btn-info profile-btn"
                    onClick={handleLogOut}>LogOut
            </button>
            <button className="btn btn-info profile-btn"
                    onClick={handleGoToSuggestionEdit}>Go to Suggestion page for edit
            </button>

            <button className="btn btn-info profile-btn"
                    onClick={handleGoToPersonalData}>Go to PersonalData page for edit
            </button>
        </div>
    );
}

export default Profile;