import { TableElementsI } from "../../utils/interfaces";

const Workers: React.FC<{ tableElements: TableElementsI[] }> = ({
  tableElements,
}) => {
  return (
    <div>
      <h3>Workers</h3>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date of Birth</th>
            <th>Profession</th>
            <th>Experience</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {tableElements.map(
            ({ name, date, profession, experience, gender }) => {
              return (
                <tr>
                  <td>{name}</td>
                  <td>{date}</td>
                  <td>{profession}</td>
                  <td>{experience}</td>
                  <td>{gender}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
      <button>Add</button>
    </div>
  );
};

export default Workers;