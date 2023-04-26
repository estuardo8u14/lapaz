import React, { useState } from "react";
import { Table, Button, Form, FormGroup, Label, Input } from "reactstrap";
import BusinessIcon from "@material-ui/icons/Business";

const initialData = [
  {
    code: "001",
    user: "john",
    rol: "admin",
    name: "John Smith",
    state: "active",
  },
  {
    code: "002",
    user: "jane",
    rol: "médico",
    name: "Jane Doe",
    state: "inactive",
  },
  {
    code: "003",
    user: "bob",
    rol: "paciente",
    name: "Bob Johnson",
    state: "active",
  },
  {
    code: "004",
    user: "susan",
    rol: "enfermera",
    name: "Susan Lee",
    state: "inactive",
  },
  {
    code: "005",
    user: "dave",
    rol: "clinicaext",
    name: "Dave Wilson",
    state: "active",
  },
];

const rols = ["admin", "paciente", "clinicaext", "médico", "enfermera"];
const states = ["active", "inactive"];

const TableCrud2 = () => {
  const [data, setData] = useState(initialData);
  const [editableRowIndex, setEditableRowIndex] = useState(-1);

  const handleEdit = (index) => {
    setEditableRowIndex(index);
  };

  const handleDelete = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const handleSave = (index, updatedData) => {
    const newData = [...data];
    newData[index] = updatedData;
    setData(newData);
    setEditableRowIndex(-1);
  };

  const handleAdd = () => {
    const newRecord = {
      code: "",
      user: "",
      rol: "",
      name: "",
      state: "",
    };
    setData([...data, newRecord]);
    setEditableRowIndex(data.length);
  };

  const renderCell = (value, fieldName, index) => {
    if (editableRowIndex === index) {
      return (
        <Input
          type="text"
          value={value}
          onChange={(e) => {
            const newData = [...data];
            newData[index][fieldName] = e.target.value;
            setData(newData);
          }}
        />
      );
    } else {
      return value;
    }
  };

  const renderSelect = (value, fieldName, index, options) => {
    if (editableRowIndex === index) {
      return (
        <Input
          type="select"
          value={value}
          onChange={(e) => {
            const newData = [...data];
            newData[index][fieldName] = e.target.value;
            setData(newData);
          }}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Input>
      );
    } else {
      return value;
    }
  };
  return (
    <div className="mt-5">
      <Table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Nombre</th>
            <th>Estado</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{renderCell(row.code, "code", index)}</td>
              <td>{renderCell(row.user, "user", index)}</td>
              <td>{renderSelect(row.rol, "rol", index, rols)}</td>
              <td>{renderCell(row.name, "name", index)}</td>
              <td>{renderSelect(row.state, "state", index, states)}</td>
              <td>
                {editableRowIndex === index ? (
                  <>
                    <Button
                      color="primary"
                      onClick={() => handleSave(index, row)}
                    >
                      Guardar
                    </Button>{" "}
                    <Button
                      color="secondary"
                      onClick={() => setEditableRowIndex(-1)}
                    >
                      Cancelar
                    </Button>{" "}
                  </>
                ) : (
                  <>
                    <i
                      className="feather-edit mt-1"
                      onClick={() => handleEdit(index)}
                    ></i>{" "}
                    <Button color="danger" onClick={() => handleDelete(index)}>
                      <i
                        className="feather-trash-2"
                        onClick={() => handleEdit(index)}
                      ></i>
                    </Button>{" "}
                    <Button color="info">
                      <i
                        className="feather-lock"
                        onClick={() => handleEdit(index)}
                      ></i>{" "}
                    </Button>{" "}
                    <Button color="warning">
                      {" "}
                      <i
                        className="feather-globe"
                        onClick={() => handleEdit(index)}
                      ></i>{" "}
                    </Button>{" "}
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="success" onClick={handleAdd}>
        Agregar nuevo
      </Button>
    </div>
  );
};

export default TableCrud2;
