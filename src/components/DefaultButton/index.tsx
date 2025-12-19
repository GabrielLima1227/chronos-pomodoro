import styles from './style.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: "green" | "red";
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = "green", ...rest }: DefaultButtonProps) {
    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...rest}> {icon} </button>
        </>
    );
}
