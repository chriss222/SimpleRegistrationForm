import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField } from "../features/registrationSlice";

export default function StepOne() {
    const dispatch = useDispatch();

    function handleChange(event) {
        const { name, value } = event.target
        dispatch(setField({[name]: value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(setField({stepOne: false, stepTwo: true}));
    }

  return (
    <form className="form-container">
      <input
        readOnly={false}
        name={"email"}
        className={"emailInput"}
        onChange={handleChange}
      />
      <input
        readOnly={false}
        name={"password"}
        type={"password"}
        className={"passwordInput"}
        onChange={handleChange}
      />
      <div className="checkbox-container">
        <input
          type={"checkbox"}
          readOnly={false}
          name={"legalAge"}
          className={"checkbox"}
          onChange={handleChange}
        />
      </div>
      <button
        className={`btn btn-primary w-full`}
        type="submit"
        onClick={handleSubmit}
      >
        DESCHIDE CONT
      </button>
    </form>
  );
}
