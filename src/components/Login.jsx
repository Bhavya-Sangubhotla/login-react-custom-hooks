import react, {useState, useEffect} from "react";
import useForm from "./hooks/use-Forms";

function Login(){
    const [ButtonState, setButtonState] = useState(true);

    const {EnteredValue: inputName, hasError, isValid ,handleChange: handleInputName, handleBlur: handleInputBlur} = useForm(value =>{
        return value.trim() !== "";
    });

    const {EnteredValue: inputMail,  hasError: mailError, handleChange: handleInputMail, handleBlur: handleMailBlur } = useForm(value =>{
        return value.includes("@") && value.trim() !== "";
    })

    const button = !hasError && !mailError;

    useEffect(() =>{
        if(button){
            setButtonState(false);
        }

    }, [hasError, mailError])
    

    function handleClick(event){
        event.preventDefault();
            
            console.log({
                userName: inputName,
                mailId: inputMail
            })  
            setButtonState(true);
        
    }

    return (
        <form onSubmit={handleClick} >
        <div className="input-controls">
        {hasError && <p className="warning">User Name Can't be empty!!</p>}
        <label htmlFor="UserName">User Name</label><br/>
        <input className={`${hasError && "invalid"}`} onChange={handleInputName} onBlur={handleInputBlur} value={inputName} type="text" name="userName" size="30"/><br/>
        {mailError && <p className="warning">MailId Can't be empty!!</p>}
        <label htmlFor="mailId">MailId</label><br/>
        <input className={`${mailError && "invalid"}`} onChange={handleInputMail} onBlur={handleMailBlur} value={inputMail} type="email" name="mailId" size="30"/>
        </div>
        <div>
            <button className={`btn btn-lg btn-danger ${ButtonState && "disable"}`} type="submit" >Submit</button>
        </div>
           
        </form>
    );

}


  

export default Login;