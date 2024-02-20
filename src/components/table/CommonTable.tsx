import styels from './Table.module.css';

export interface IColumns {
  key: string;
  label: string;
}
export interface IDatas {
  [key: string]: any;
}

interface ITableProps {
  columnGroups: IColumns[][];
  dataGroups: IDatas[];
}

const CommonTable = ({ columnGroups, dataGroups }: ITableProps) => {
  return (
    <table className={styels.table}>
      <thead>
        {columnGroups.map((columns, index) => (
          <tr key={index}>
            {columns.map(column => (
              <td key={column.key}>{column.label}</td>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {dataGroups.map((data, index) => (
          <tr key={index}>
            {Object.keys(data).map(key => (
              <td key={key}>{data[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommonTable;
