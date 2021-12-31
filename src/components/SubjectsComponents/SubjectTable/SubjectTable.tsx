import "./SubjectTable.scss";
import Table from "../../TablesType/MainTable/Table";

class SubjectTable extends Table<Subject> {}
export type Subject = {
  name: string | number;
  description: string;
  room: string;
};
export default SubjectTable;
