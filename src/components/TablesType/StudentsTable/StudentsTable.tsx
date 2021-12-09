import "./StudentsTable.scss";
import Table from "../MainTable/Table";

type TableProps = {
  id: string | number;
  name: string;
};

class StudentsTable extends Table<TableProps> {}

export default StudentsTable;
