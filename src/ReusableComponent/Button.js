
import './button.css'
const STYLES=[
    "btn-primary"
]
const Buttons=({children,type,onClick,buttonStyle})=>{
    const buttonstyle=STYLES.includes(buttonStyle)?buttonStyle:STYLES[0];
    return(
        <button onClick={onClick} className={`${buttonstyle}`} type={type}>{children}</button>
        );
}

export default Buttons; 