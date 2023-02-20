import react, { useState , useEffect }  from "react";
import useRegister from "./hooks/use-register";

function Register(){

    const [buttonDisableState, setButtonDisableState] = useState(true);

    const {enteredValue: InputFirstName,  isValid: IsFirstNameNotEmpty, hasError: FirstNameError, handleBlur: handleInputFirstNameBlur, handleChange: handleInputFirstName, reset: resetFirstName} = useRegister(value =>{
        return value.trim() !== "";
    });
    const {enteredValue: InputLastName, isValid: IsLastNameNotEmpty, hasError: LastNameError, handleBlur: handleInputLastError, handleChange: handleInputLastName, reset: resetLastName} = useRegister(value =>{
        return value.trim() !== "";
    });

    const {enteredValue: InputEmail, isValid: IsEmailNotEmpty, hasError: EmailError, handleBlur: handleEmailBlur, handleChange: handleEMailChange, reset: resetEmail} = useRegister(value =>{
        return value.includes("@");
    });

    useEffect(()=>{
        if(IsFirstNameNotEmpty && IsLastNameNotEmpty && IsEmailNotEmpty){
            setButtonDisableState(false);

        }
    }, [IsFirstNameNotEmpty, IsLastNameNotEmpty, IsEmailNotEmpty])

    function handleClick(event){
        
        event.preventDefault();
        console.log(InputFirstName,InputLastName,InputEmail)
       
        resetFirstName();
        resetLastName();
        resetEmail();
        
    }

    
    
    return(
        <form>
        <div className="input-controls">
            {FirstNameError && <p className="warning">First Name Cannot be empty!</p>}
            <label  htmlFor="fname">First Name</label><br/>
            <input className={`${FirstNameError && "invalid"} `} onChange={handleInputFirstName} onBlur={handleInputFirstNameBlur} value={InputFirstName} type="text" name="fname" size="30"/><br/>
            {LastNameError && <p className="warning">Last Name Cannot be empty!</p>}
            <label htmlFor="lname">Last Name</label><br/>
            <input className={`${LastNameError && "invalid"}`} onChange={handleInputLastName} value={InputLastName} onBlur={handleInputLastError} type="text" name="lname" size="30"/><br/>
            {EmailError && <p className="warning">Email Address Cannot be empty!</p>}
            <label htmlFor="email">Email Address</label><br/>
            <input className={`${EmailError && "invalid"}`} onChange={handleEMailChange} value={InputEmail} onBlur={handleEmailBlur} type="email" name="email" size="30"/><br/>
            </div>
            <div className="input-buttons">
                <button className={`btn btn-lg btn-danger ${buttonDisableState && "disable"}`} onClick={handleClick}>Submit</button>
            </div>
        </form>
    );
}

export default Register;
