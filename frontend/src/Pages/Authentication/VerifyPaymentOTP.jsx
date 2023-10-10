import { useState } from "react";
import OTPInput from "react-otp-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VerifyPaymentOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const Successnotify = () => toast.success("Payment done");
  const Errornotify = () => toast.error("Invalid OTP");
  const handleOTP = () => {
    const options = {
      url: "http://localhost:5000/api/auth/verify-otp",
      //"http://localhost:5000",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        otp: otp,
      },
    };

    axios(options)
      .then((response) => {
        console.log(response.status);
        // Successnotify();
        // navigate("/login");

        if (response.status == 200) {
          // Successnotify();
          navigate("/login");
        } else {
          Errornotify();
        }
      })
      .catch(() => {
        alert("Invalid OTP , Try again");
      });
  };
  return (
    <div className=' flex h-screen items-center justify-center'>
      <ToastContainer
        className='Z-10 absolute top-20'
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <div className='w-1/2 h-1/2 p-8 bg-gray-50 rounded-md shadow-md'>
        <h2 className='para font-semibold text-2xl text-center'>
          Payment Verification Step
        </h2>

        <div className='flex mt-8 flex-col justify-center m-auto items-center'>
          <h4 className='para mt-4 mb-4'>Enter OTP Code</h4>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            containerStyle='p-2 bg-gray-200 rounded-md'
            inputStyle={"text-2xl ml-6"}
          />
        </div>
        <button
          onClick={handleOTP}
          className='btn text-center m-auto block mt-6 bg-green-500 text-white
        hover:bg-green-600
        '
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default VerifyPaymentOTP;
