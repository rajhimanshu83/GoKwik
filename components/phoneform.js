/* /pages/login.js */
import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";

function PhoneForm() {
  const [value,setValue] = useState("");
  const [active, setActive] = useState(true);
  const appContext = useContext(AppContext);

  const handlechange = (e) => {
    setValue(e.target.value);
    const isValid = checkPhone(e.target.value);
    if(isValid) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  const onSubmit = () => {
    window.localStorage.setItem("manMattersNo", value);
    appContext.setRedeemed(true);
    appContext.setSuccess(true);
    setTimeout(()=> appContext.setSuccess(false) , 2000);
  }

  const checkPhone = (val) => {
    var phoneNum = val.replace(/[^\d]/g, '');
    if(phoneNum.length < 10) {  return false; }
    return true;
  }


  return (
    <div className="verify-page ">
      <div className="verify-box">
      <div className="illustration-wrapper rounded-3xl">
            <img className="rounded-3xl" style={{width:1080}} src="/paytmcard.png" alt="paytmcard"/>
          </div>
        <div className="w-full p-5 text-center">
          <p className="form-title px-4 lg:bg-white p-5 lg:rounded">You have WON PayTM Gift Card of Rs 200 for <strong>placing the order on Man Matters</strong> </p>
          <input type="number" maxLength="10" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={handlechange} value={value} className="bg-gray-200 m-2 text-center appearance-none border-2 border-gray-200 rounded-full w-full py-4 px-4 text-gray-900 text-2xl font-extrabold leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inline-full-name" type="text" placeholder="Enter Mobile Number"></input>
          <span className="text-gray-500 text-sm p-4">Enter the same number used on Man Matters</span>
          <button type="button" style={{background:`${active ? "grey" : "#009fe3"}`}} onClick={onSubmit} disabled={active} className="w-full m-2 hover:bg-blue-700 text-white font-bold rounded py-4 px-4 rounded-full">
        WOW! Get My PayTM Gift Card &#10097;
         </button>
          </div>
      </div>
    </div>
  );
}

export default PhoneForm;
