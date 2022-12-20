import { createSlice } from "@reduxjs/toolkit";

const initialeState = {
    "stepOne": true,
    "stepTwo": false,
    "stepThree": false,
    "email": "",
    "password": "",
    "gdpr": false,

    "errors" : {
        "gdpr": "",
        "email": "",
        "password": ""
    }
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState: initialeState,
    reducers: {
        setField: (state, action) => {
            console.log(state, action);
            for(const [key, value] of Object.entries(action.payload)){
                state[key] = value;
            }
        }
    }
})

export const { setField } = registrationSlice.actions;

export default registrationSlice.reducer