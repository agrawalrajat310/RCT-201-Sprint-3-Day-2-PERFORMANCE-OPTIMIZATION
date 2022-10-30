import React, { useRef, useState } from "react";
import "./style.css";

export const OtpInput = ({ totalInputs, onChange }) => {
  const inputRef = useRef([]);

  const [otp, setOtp] = useState("");

  const [btn, setBtn] = useState(true);

  // const divRef= useRef<HTMLInputElement>(null);
  const handleClick = () => {
    setBtn(false);
    console.log("Your Submitted OTP is: ", otp);
  };

  return (
    <div>
      <label>Enter Your OTP : </label>
      {new Array(totalInputs).fill(1).map((el, index) => (
        <input
          key={index}
          onChange={(e) => {
            setOtp(otp + e.target.value);
          }}
          onPaste={() => {
            //paste logic
          }}
          onKeyUp={(e) => {
            //if backspace was press
            console.log(e);
            if (e.code === "Backspace") {
              inputRef.current[index - 1]?.focus();
              inputRef.current[index - 1]?.select();
            } else {
              inputRef.current[index + 1]?.focus();
            }
            //    onChange(otp)
          }}
          ref={(element) => {
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
          type={"text"}
          maxLength={1}
          className="otpinput"
        />
      ))}

      <br />
      <br />
      <button style={{}} onClick={handleClick}>
        {" "}
        {btn ? "Submit" : "Your OTP is submitted"}
      </button>
    </div>
  );
};
