import { useDispatch, useSelector } from "react-redux";
import StepOne from './app/StepOne';
import StepTwo from './app/StepTwo';

function App() {
    const { stepOne, stepTwo, stepThree } = useSelector((store) => store.registration)
  return (
    <>
        {(stepOne && <StepOne />)}
        {(stepTwo && <StepTwo />)}
    </>
  )
}

export default App;
