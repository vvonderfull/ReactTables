import React, { useState } from "react";
import "./CreateEditSubjectModal.scss";
import axios from "axios";

const CreateEditSubjectModal = (props: any) => {
  const [nameValue, setNameValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [roomValue, setRoomValue] = useState("");
  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!nameValue || !descriptionValue || !roomValue) {
      return false;
    }
    axios({
      url: "http://localhost:8080/api/subject/create",
      method: "POST",
      data: {
        name: nameValue,
        description: descriptionValue,
        room: roomValue,
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
          <h2>добавить предмет</h2>
          <div className="modal-bg__name">
            <label htmlFor="name">название</label>
            <input
              id="name"
              type="text"
              value={nameValue}
              onInput={(e) => {
                setNameValue((e.target as HTMLTextAreaElement).value);
              }}
            />
          </div>
          <div className="modal-bg__description">
            <label htmlFor="description">описание</label>
            <textarea
              id="description"
              value={descriptionValue}
              onInput={(e) => {
                setDescriptionValue((e.target as HTMLTextAreaElement).value);
              }}
            />
          </div>
          <div className="modal-bg__room">
            <label htmlFor="room">класс</label>
            <input
              id="room"
              type="number"
              value={roomValue}
              onInput={(e) => {
                setRoomValue((e.target as HTMLTextAreaElement).value);
              }}
            />
          </div>
          <button className="modal-bg__create">добавить</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEditSubjectModal;
