import react, { useState } from "react";

const useRegister = (validate) =>{

    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(enteredValue);
    const hasError = !isValid && isTouched;

    function handleChange(event){
        setEnteredValue(event.target.value);
    }
    function handleBlur(){
        setIsTouched(true)
        console.log(isTouched);
    }
    function reset(){
        setEnteredValue("");
        setIsTouched(false);
    }

    return {
        enteredValue,
        handleChange,
        hasError,
        handleBlur,
         isValid, 
         reset
    }

}

export default useRegister;