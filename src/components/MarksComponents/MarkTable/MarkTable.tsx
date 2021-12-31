import "./MarkTable.scss";
import Table from "../../TablesType/MainTable/Table";
import React from "react";
import { Student } from "../../StudentsComponents/StudentsTable/StudentsTable";
import { Subject } from "../../SubjectsComponents/SubjectTable/SubjectTable";

type TableProps = {
  value: number;
  description: string;
  student: Student;
  subject: Subject;
};

class MarkTable extends Table<TableProps> {
  render() {
    const { tableFields, tableData } = this.props;
    return (
      <table className="table-main">
        <thead className="table-main__head head">
          <tr className="head__row">
            {tableFields.map((item) => (
              <td className="head__cell" key={JSON.stringify(item)}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="table-main__body body">
          {tableData.map((data, index) => (
            <tr className="body__row" key={String(data) + index}>
              {tableFields.map((item) => (
                <td
                  className="body__cell"
                  key={
                    typeof data[item] === "object"
                      ? String((data[item] as Student | Subject).name)
                      : String(data[item])
                  }
                >
                  {typeof data[item] === "object"
                    ? (data[item] as Student | Subject).name
                    : data[item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MarkTable;
