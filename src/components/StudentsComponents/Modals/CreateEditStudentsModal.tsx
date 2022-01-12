import React, { useState } from "react";
import "./CreateEditStudentsModal.scss";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CreateEditStudentsModal = (props: any) => {
  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [birthdayValue, setBirthdayValue] = useState(new Date());
  const [phoneValue, setPhoneValue] = useState("");
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!nameValue || !surnameValue || !birthdayValue || !phoneValue) {
      return false;
    }
    axios({
      url: "http://localhost:8080/api/student/create",
      method: "POST",
      data: {
        name: nameValue,
        surname: surnameValue,
        birthday: birthdayValue,
        phone: phoneValue,
      },
    })
      .then((resp) => {
        props.hideModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="modal-bg" onClick={props.hideModal}>
      <div
        className="modal-bg__main"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form className="modal-bg__form" onSubmit={submitHandler}>
          <h2>добавить студента</h2>
          <div className="modal-bg__name">
            <label htmlFor="name">имя</label>
            <input
              id="name"
              type="text"
              value={nameValue}
              onInput={(e) => {
                setNameValue((e.target as HTMLTextAreaElement).value);
              }}
            />
          </div>
          <div className="modal-bg__surname">
            <label htmlFor="surname">фамилия</label>
            <input
              id="surname"
              type="text"
              value={surnameValue}
              onInput={(e) => {
                setSurnameValue((e.target as HTMLTextAreaElement).value);
              }}
            />
          </div>
          <div className="modal-bg__birthday">
            <label>день рождения</label>
            <DatePicker
              selected={birthdayValue}
              onChange={(date: Date) => setBirthdayValue(date)}
            />
          </div>
          <div className="modal-bg__phone">
            <label>телефон</label>
            <PhoneInput
              country={"ru"}
              value={phoneValue}
              disableDropdown={true}
              countryCodeEditable={false}
              onChange={(phone) => setPhoneValue(phone)}
            />
          </div>
          <button className="modal-bg__create">добавить</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEditStudentsModal;
