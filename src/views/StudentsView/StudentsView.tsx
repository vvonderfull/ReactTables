import React from "react";
import "./StudentsView.scss";
import StudentsTable from "../../components/TablesType/StudentsTable/StudentsTable";
const testFields = ["id", "name"] as const;
const testData = [
  { id: "1", name: "test1" },
  { id: "2", name: "test2" },
  { id: "3", name: "test3" },
];
const StudentsView = () => {
  return (
    <section className="students-page">
      <div className="students-page__main">
        <button className="students-page__add-student">
          Добавить студента
        </button>
        {<StudentsTable tableFields={testFields} tableData={testData} />}
      </div>
    </section>
  );
};

export default StudentsView;
