import "./inputBox.css";
const InputBox = ({ type, placeholder, page, name, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={page == "회원가입" ? "auth-inputBox2" : "auth-inputBox"}
      name={name}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default InputBox;
