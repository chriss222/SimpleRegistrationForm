import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../features/registrationSlice";

export default function StepOne({setStep}) {
    const dispatch = useDispatch();
    const {email, password, gdpr, errors} = useSelector((store) => store.registration);

    function handleChange(event) {
        const { name, value } = event.target
        dispatch(setField({[name]: value}))
    }

    function formIsValid() {
        let validEmail = email ? true : "Please enter your email";
        let vaildPassword = password ? true : "Please enter your password";
        let validGdpr = gdpr ? true : "You must agree with terms and conditions";
        if(!validEmail || !vaildPassword || !gdpr) {
            dispatch(setField({
                errors: {
                    ...errors,
                    email: validEmail,
                    password: vaildPassword,
                    gdpr: validGdpr
                }
            }))
        } else {
            return (validEmail && vaildPassword && validGdpr);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        // dispatch(setField({stepOne: false, stepTwo: true}));
        if(formIsValid()) {
            setStep(2);
        }
    }

  return (
    <form className="mx-1 mx-md-4">
        <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
                <input
                    id="emailInput"
                    readOnly={false}
                    name={"email"}
                    className={"form-control"}
                    onChange={handleChange}
                />
                <label className="form-label" htmlFor="emailInput">Your Email</label>
            </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
            <div className="form-outline flex-fill mb-0">
                <input
                    id="passwordInput"
                    readOnly={false}
                    name={"password"}
                    type={"password"}
                    className={"form-control"}
                    onChange={handleChange}
                />
                <label className="form-label" htmlFor="passwordInput">Your Password</label>
            </div>
        </div>

        <div className="form-check d-flex justify-content-center mb-5">
            <input
                id="terms"
                type={"checkbox"}
                readOnly={false}
                name={"gdpr"}
                className={"form-check-input me-2"}
                onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="terms">
                I agree all statements in <a href="#!">Terms of service</a>
            </label>
        </div>
    
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
            <button
            className={`btn btn-primary btn-lg`}
            type="submit"
            onClick={handleSubmit}
            >
                Sign Up
            </button>
        </div>

    </form>
  );
}
