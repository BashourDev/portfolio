import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Button from "./Button";
import InputField from "./InputField";
import TextArea from "./TextArea";
import emailjs from "emailjs-com";
import apiKey from "../emailkey";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import Joi from "joi-browser";

const Contact = () => {
  const [emailErrors, setEmailErrors] = useState("");
  const [messageErrors, setMessageErrors] = useState("");
  const [sendText, setSendText] = useState("Send");
  let emailRef = useRef("");
  let messageRef = useRef("");
  const schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "org"] } })
      .required(),
    message: Joi.string().required().min(5),
  };

  //   const validate = () => {
  //     const sch = Joi.object(schema);
  //     const result = sch.validate(
  //       {
  //         email: emailRef.current.value,
  //         message: messageRef.current.value,
  //       },
  //       { abortEarly: false }
  //     );
  //     if (!result.error) {
  //       setEmailErrors(null);
  //       setMessageErrors(null);
  //     } else {
  //       result.error.details.map((er) =>
  //         er.path === "email"
  //           ? setEmailErrors(er.message)
  //           : setMessageErrors(er.message)
  //       );
  //     }
  //   };

  const validateField = (name, value) => {
    let err = {};
    const obj = { [name]: value };
    const sch = Joi.object({ [name]: schema[name] });
    const result = sch.validate(obj);
    if (!result.error) {
      setEmailErrors(null);
      setMessageErrors(null);
    } else {
      result.error.details.map((er) => (err[er.path] = er.message));
      if (err && err.email) {
        setEmailErrors(err.email);
      } else if (err && err.message) {
        setMessageErrors(err.message);
      }
    }
  };

  const handleSubmit = async () => {
    // validate();
    validateField("email", emailRef.current.value);
    validateField("message", messageRef.current.value);
    if (emailErrors !== null || messageErrors !== null) {
      return;
    }
    setSendText("Sending...");
    await emailjs
      .send(
        apiKey.SERVICE_ID,
        apiKey.TEMPLATE_ID,
        {
          email: emailRef.current.value,
          message: messageRef.current.value,
        },
        apiKey.USER_ID
      )
      .then(
        (result) => {
          emailRef.current.value = "";
          messageRef.current.value = "";
          toast.success(
            "Thank you for contacting me, I will respond as soon as possible"
          );
        },
        (error) => {
          toast.error("An error has occurred, Please try again!");
        }
      );
    setSendText("Send");
  };
  return (
    <div className="flex flex-col w-full items-center pt-10 pb-16 font-robot font-light text-gray-900">
      <div className="text-3xl font-extralight text-gray-100  font-titillium">
        <h2>Contact me</h2>
      </div>
      <InputField
        type="email"
        placeholder="Enter Your Email :"
        customStyle="h-14"
        innerRef={emailRef}
        onBlur={(e) => validateField("email", emailRef.current.value)}
      />
      {emailErrors && <p className="text-gray-100">*{emailErrors}</p>}
      <TextArea
        innerRef={messageRef}
        placeholder="Enter Your Message :"
        customStyle="text-gray-800"
        onBlur={(e) => validateField("message", messageRef.current.value)}
      />
      {messageErrors && <p className="text-gray-100">*{messageErrors}</p>}
      <Button
        customStyle="bg-gray-100 rounded-md h-14 lg:w-2/4 sm:w-3/4 h-10 xl:w-1/3"
        onClick={handleSubmit}
        icon={faTelegramPlane}
      >
        {sendText}
      </Button>
    </div>
  );
};

export default Contact;
