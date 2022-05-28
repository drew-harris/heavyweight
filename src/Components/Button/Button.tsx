import styles from "./Button.module.css";
interface ButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  text: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.loading || props.disabled}
      className={styles.button}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
