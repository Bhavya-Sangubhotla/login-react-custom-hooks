import react, { useState } from "react";

const useForm = (validate) =>{
    const [EnteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);


    const isValid = validate(EnteredValue);
    const hasError = !isValid && isTouched;
    

    function handleChange(event){
        setEnteredValue(event.target.value);
    }

    function handleBlur(){
        setIsTouched(true);
    }
    

    return({
        EnteredValue,
        isTouched,
        hasError,
        handleChange,
        handleBlur
    })
}
export default useForm;