import React from "react";
import {Validator} from "./Validator";

class GenericInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isCheckbox: props.type === "checkbox",
            label: props.hasLabel ? this.decideLabelFormat() : null
        }
    }

    decideLabelFormat = () => {
        if (this.props.type === "checkbox") {
            if (this.props.isLegalAge) {
                return(
                    <label className={"custom-control-label"} htmlFor={this.props.name}>
                        Am peste 18 ani și accept {this.termsAndConditions()}, {this.privacyPolicy()} și {this.securityPolicy()}.
                    </label>
                )
            }
            return (
                <label className={"custom-control-label"} htmlFor={this.props.name}>
                    {this.props.labelValue}
                </label>
            )
        } else {
            return (
                <label>{this.props.labelValue} {this.props.isOptional ? "(optional)" : null}</label>
            )
        }
    }

    replaceShortCode = (labelText) => {
        let privacyPolicy = "<PP>";
        let termsCond = "<TC>";

        return labelText.replace(privacyPolicy, this.privacyPolicy()).replace(termsCond, this.termsAndConditions())
    }

    termsAndConditions = () => {
        return (
            <a href={"https://playgg.ro/terms-conditions/"}
               className={"modal-ajax-href modal-main modal-privacy-policy pp-link"}
               target={"_blank"}
               rel={"noreferrer"}
               >Termenii și Condițiile</a>
        );
    };

    privacyPolicy = () => {
        return (
            <a href={"https://playgg.ro/privacy-policy/"}
               className={"modal-ajax-href modal-main modal-privacy-policy pp-link"}
               target={"_blank"}
               rel={"noreferrer"}
               >Politica de confidențialitate</a>
        )
    }

    securityPolicy = () => {
        return (
            <a href={"https://playgg.ro/security-ecology-policy/"}
               className={"modal-ajax-href modal-main modal-privacy-policy pp-link"}
               target={"_blank"}
               rel={"noreferrer"}
            >Politica de Securitate și Mediu de Joc</a>
        )
    }

    handleChange = (event) => {
        if (this.state.isCheckbox) {
            const {name, checked} = event.target;
            console.log(checked);
            if (checked) {
                this.props.setReduxState({
                    [name]: checked,
                    errors: {
                        ...this.props.reduxState.errors,
                        [name]: ""
                    }
                });
            } else {
                this.props.setReduxState({
                    [name]: checked
                });
            }
        } else if (this.props.isPlayGGReg) {
            console.log('here');
            const {name, value} = event.target;
            this.props.setReduxState({
                [name]: value,
                errors: {
                    ...this.props.reduxState.errors,
                    [name]: ""
                }
            });
        }
        else {
            const {name, value} = event.target;
            let valid = this.props.customValidation ? Validator[name](value) : Validator.checkEmptyField(value);
            this.props.setReduxState({
                [name]: value,
                errors: {
                    ...this.props.reduxState.errors,
                    [name]: valid === true ? "" : valid
                }
            });
        }

    };

    renderErrorMsg = () => {
        return !this.props.hideErrorMsg ?
            <> 
                {
                    this.props.reduxState.errors[this.props.name]
                        ? <div className="error-message"><small className="form-text text-danger">{this.props.reduxState.errors[this.props.name]}</small></div>
                        : ""
                }
            </>
            : null
    }

    render() {
        return (
            <div className="form-group-container">
                <div className="form-group">
                    {
                        this.state.isCheckbox ?
                            <div className="custom-control custom-checkbox">
                                <input
                                    className={"custom-control-input"}
                                    type={"checkbox"}
                                    id={this.props.name}
                                    name={this.props.name}
                                    checked={this.props.reduxState[this.props.name]}
                                    onChange={this.handleChange}
                                />
                                {this.state.label}
                            </div>
                            :
                            <>
                                <input
                                    readOnly={this.props.readOnly}
                                    className="form-control"
                                    type={this.props.type ? this.props.type : "text"}
                                    name={this.props.name}
                                    // placeholder={this.props.placeholder}
                                    value={this.props.reduxState[this.props.name]}
                                    onChange={this.handleChange}
                                    required
                                />
                                {this.state.label}
                            </>
                    }
                </div>

                {
                    this.state.isCheckbox ?
                    <div className="checkboxErrorWrapper">{this.renderErrorMsg()}</div>
                    :
                    this.renderErrorMsg()
                }

            </div>
        )
}

}

export default GenericInput;
