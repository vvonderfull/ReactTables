import "./StudentsTable.scss";
import Table from "../../TablesType/MainTable/Table";

class StudentsTable extends Table<Student> {}
export type Student = {
  name: string | number;
  surname: string;
  birthday: string;
  phone: string;
};
export default StudentsTable;
