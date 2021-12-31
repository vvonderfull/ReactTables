import React, { useState, useEffect } from "react";
import "./RatingsView.scss";
import MarkTable from "../../components/MarksComponents/MarkTable/MarkTable";
import CreateEditMarkModal from "../../components/MarksComponents/Modals/CreateEditMarkModal";
import axios from "axios";

const RatingsView = () => {
  const [loading, setLoading] = useState(false);
  const [marks, setMarks] = useState([]);
  const [marksFields] = useState([
    "student",
    "subject",
    "description",
    "value",
  ] as const);
  const [showModal, setShowModal] = useState(false);

  const changeShowModal = (val: boolean): void => {
    changeSubjects();
    setShowModal(val);
  };
  const changeSubjects = (): void => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/api/mark/getAll",
      method: "GET",
    })
      .then((resp) => {
        setMarks(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    changeSubjects();
  }, []);
  return (
    <section className="students-page">
      <div className="students-page__main">
        <button
          className="students-page__add-student"
          onClick={() => changeShowModal(true)}
        >
          Добавить оценку
        </button>
        {!loading && <MarkTable tableFields={marksFields} tableData={marks} />}
      </div>
      {showModal && (
        <CreateEditMarkModal hideModal={() => changeShowModal(false)} />
      )}
    </section>
  );
};

export default RatingsView;
