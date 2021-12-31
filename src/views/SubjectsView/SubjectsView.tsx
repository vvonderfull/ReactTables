import React, { useState, useEffect } from "react";
import "./SubjectsView.scss";
import SubjectTable from "../../components/SubjectsComponents/SubjectTable/SubjectTable";
import CreateEditSubjectModal from "../../components/SubjectsComponents/Modals/CreateEditSubjectModal";
import axios from "axios";

const SubjectsView = () => {
  const [loading, setLoading] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [subjectFields] = useState(["name", "description", "room"] as const);
  const [showModal, setShowModal] = useState(false);

  const changeShowModal = (val: boolean): void => {
    changeSubjects();
    setShowModal(val);
  };
  const changeSubjects = (): void => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/api/subject/getAll",
      method: "GET",
    })
      .then((resp) => {
        setSubjects(resp.data);
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
          Добавить предмет
        </button>
        {!loading && (
          <SubjectTable tableFields={subjectFields} tableData={subjects} />
        )}
      </div>
      {showModal && (
        <CreateEditSubjectModal hideModal={() => changeShowModal(false)} />
      )}
    </section>
  );
};

export default SubjectsView;
