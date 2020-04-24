/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withRouter } from "react-router-dom";


function AutoComplete(props) {
    const defaultProps = {
        options: props.suggestionLists,
        getOptionLabel: option => option.name,

    };
    const [role, setRole] = useState({
        name: "",
        localtion: ""
    });
    return (
        <Autocomplete
            value={role}
            {...defaultProps}
            onChange={(event, newValue) => {
                props.history.push("/user/restaurants")
                setRole(newValue);
            }}
            style={{ minWidth: 300 }}
            renderInput={(params) => <TextField {...params} placeholder="Search your favourite restaurant" fullWidth variant="outlined" />}
        />
    );
}
export default withRouter(AutoComplete);
