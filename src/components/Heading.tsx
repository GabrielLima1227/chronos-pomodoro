import style from "./Heading.module.css";

export function Heading(props) {
    // Log all received properties 
    console.log(props);
    return (
        <>
            <h1 className={style.heading}>{props.children}</h1>
        </>
    )
}