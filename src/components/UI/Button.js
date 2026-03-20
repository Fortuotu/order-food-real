const Button = (props) => {
    let button_class = "text-button";
    let text = props.text;

    if (props.textOnly === false) {
        button_class = 'button';
    }

    return ( 
        <button className={button_class} onClick={props.onClick}>{text}</button>
    )
}

export default Button