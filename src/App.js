import { useDispatch, useSelector } from "react-redux";
import StepOne from "./app/StepOne";
import StepTwo from "./app/StepTwo";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";

function App() {
  const { stepOne, stepTwo, stepThree } = useSelector(
    (store) => store.registration
  );
  const [step, setStep] = useState(1)

  return (
    <>
      <section className="vh-100" style={{backgroundColor: "#eee"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      
                        {step === 1 && <StepOne setStep={setStep}/>}
                        {step === 2 && <StepTwo setStep={setStep}/>}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
