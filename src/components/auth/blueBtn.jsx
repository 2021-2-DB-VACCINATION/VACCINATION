import "./blueBtn.css";
const BlueBtn = ({ text, event }) => {
  return (
    <button
      type="button"
      className={text == "회원가입" ? "auth-blueBtn2" : "auth-blueBtn"}
      onClick={event}
    >
      <span className="text">{text}</span>
    </button>
  );
};
export default BlueBtn;
