import React, { Component } from "react";
import "./Table.scss";

type TableProps<T> = {
  tableFields: ReadonlyArray<keyof T>;
  tableData: ReadonlyArray<T>;
};

class Table<T> extends Component<TableProps<T>, {}> {
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
                <td className="body__cell" key={String(data[item])}>
                  {data[item]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
