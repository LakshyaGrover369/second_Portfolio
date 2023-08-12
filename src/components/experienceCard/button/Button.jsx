import Styles from "./Button.module.css";

function Button({ text , link  }) {
  return (
    <a className={Styles.Slider_btn} href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  )
}

export default Button;
