import React, { useEffect, useState } from "react";
import "./CreateEditMarkModal.scss";
import axios from "axios";
import { Student } from "../../StudentsComponents/StudentsTable/StudentsTable";
import { Subject } from "../../SubjectsComponents/SubjectTable/SubjectTable";

const CreateEditMarkModal = (props: any) => {
  const [markValue, setMarkValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [studentValue, setStudentValue] = useState<Student | null>(null);
  const [subjectValue, setSubjectValue] = useState<Subject | null>(null);
  const [studentList, setStudentList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const changeStudentValue = (value: string) => {
    let student = studentList.find((item: Student) => item.name === value);
    setStudentValue(student || null);
  };
  const changeSubjectValue = (value: string) => {
    let subject = subjectList.find((item: Subject) => item.name === value);
    setSubjectValue(subject || null);
  };
  const getListStudents = () => {
    axios({
      url: "http://localhost:8080/api/student/getAll",
      method: "GET",
    })
      .then((resp) => {
        setStudentList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getListSubjects = () => {
    axios({
      url: "http://localhost:8080/api/subject/getAll",
      method: "GET",
    })
      .then((resp) => {
        setSubjectList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!markValue || !descriptionValue || !studentValue || !subjectValue) {
      return false;
    }
    axios({
      url: "http://localhost:8080/api/mark/create",
      method: "POST",
      data: {
        value: markValue,
        description: descriptionValue,
        student: studentValue,
        subject: subjectValue,
      },
    })
      .then((resp) => {
        props.hideModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getListStudents();
    getListSubjects();
  }, []);
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
          <div className="modal-bg__mark">
            <label htmlFor="name">оценка</label>
            <input
              id="name"
              type="number"
              value={markValue}
              onInput={(e) => {
                setMarkValue((e.target as HTMLInputElement).value);
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
          <div className="modal-bg__student">
            <label htmlFor="description">студент</label>
            <select
              onChange={(e) =>
                changeStudentValue((e.target as HTMLSelectElement).value)
              }
            >
              {studentList.map((student: any) => (
                <option key={student._id}>{student.name}</option>
              ))}
            </select>
          </div>
          <div className="modal-bg__subject">
            <label htmlFor="description">предмет</label>
            <select
              onChange={(e) =>
                changeSubjectValue((e.target as HTMLSelectElement).value)
              }
            >
              {subjectList.map((subject: any) => (
                <option key={subject._id}>{subject.name}</option>
              ))}
            </select>
          </div>
          <button className="modal-bg__create">добавить</button>
        </form>
      </div>
    </div>
  );
};

export default CreateEditMarkModal;
