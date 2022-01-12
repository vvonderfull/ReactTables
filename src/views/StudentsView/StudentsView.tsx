import React, { useState, useEffect } from "react";
import "./StudentsView.scss";
import StudentsTable from "../../components/StudentsComponents/StudentsTable/StudentsTable";
import CreateEditStudentsModal from "../../components/StudentsComponents/Modals/CreateEditStudentsModal";
import axios from "axios";

const StudentsView = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [studentsFields] = useState([
    "name",
    "surname",
    "birthday",
    "phone",
  ] as const);
  const [showModal, setShowModal] = useState(false);

  const changeShowModal = (val: boolean): void => {
    changeStudents();
    setShowModal(val);
  };
  const changeStudents = (): void => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/api/student/getAll",
      method: "GET",
    })
      .then((resp) => {
        setStudents(resp.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    changeStudents();
  }, []);
  return (
    <section className="students-page">
      <div className="students-page__main">
        <button
          className="students-page__add-student"
          onClick={() => changeShowModal(true)}
        >
          Добавить студента
        </button>
        {!loading && (
          <StudentsTable tableFields={studentsFields} tableData={students} />
        )}
      </div>
      {showModal && (
        <CreateEditStudentsModal hideModal={() => changeShowModal(false)} />
      )}
    </section>
  );
};

export default StudentsView;
