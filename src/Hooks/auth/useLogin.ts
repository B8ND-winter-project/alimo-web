import { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";

const uselogin = ()=>{
    const navigate = useNavigate();
    const [isInputClicked, setIsInputClicked] = useState(false);
  const [clickName, setClickName] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isShowPswd, setIsShowPswd] = useState(false);
  const [isIdButton, setIsIdButton] = useState(false);
  const [isPasswordButton, setIsPasswordButton] = useState(false);
  const [idDisplayBlock, setIdDisplayBlock] = useState("none");
  const [passwordDisplayBlock, setPasswordDisplayBlock] = useState("none");

  const Focus = () => setIsInputClicked(true);
  const Blur = () => setIsInputClicked(false);
  const IdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idRegex = /^[A-Za-z0-9]+$/;

    if (idRegex.test(e.target.value) || e.target.value === "") {
      setIdValue(e.target.value);
      e.target.value === "" ? setIsIdButton(false) : setIsIdButton(true);
      e.target.value === ""
        ? setIdDisplayBlock("none")
        : setIdDisplayBlock("block");
    }
  };
  const PasswordChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^\s*[\w!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+$/;

    if (passwordRegex.test(e.target.value) || e.target.value === "") {
      setPasswordValue(e.target.value);
      e.target.value === ""
        ? setIsPasswordButton(false)
        : setIsPasswordButton(true);
      e.target.value === ""
        ? setPasswordDisplayBlock("none")
        : setPasswordDisplayBlock("block");
    }
  };
  const LoginButton = () => {
    if (idValue === "" || passwordValue === "") {
      showToast("erorr", "로그인 실패");
    } else {
      showToast("success", "로그인 성공");
      navigate("/main");
    }
  };
return{
    idValue,
    setIdValue,
    setIsIdButton,
    passwordValue,
    isInputClicked,
    clickName,
    setClickName,
    isShowPswd,
    setIsShowPswd,
    isIdButton,
    isPasswordButton,
    idDisplayBlock,
    passwordDisplayBlock,
    Focus,
    Blur,
    IdChange,
    PasswordChange,
    LoginButton
}
}
export default uselogin