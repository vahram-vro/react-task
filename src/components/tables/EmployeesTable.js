import React from 'react';
import './table.css';

const EmployeesTable = ({items, handleAdd, handleDelete}) => {
    console.log(items)

    const renderTableData = () => {
        return items.map((item, index) => {
            return (
                <tr key={item.email + index}>
                    <td>{item['first_name']}</td>
                    <td>{item['last_name']}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.department}</td>
                    <td>{item.jobTitle}</td>
                    <td>{item.country}</td>
                    <td>{item.city}</td>
                    {handleAdd && (<td>
                        <button className="btn btn-info"
                                onClick={() => handleAdd(item)}>Add
                        </button>
                    </td>)}
                    {handleDelete && (<td>
                        <button className="btn btn-danger"
                                onClick={() => handleDelete(item)}>Delete
                        </button>
                    </td>)}

                </tr>
            )
        })
    }

    const renderTableHeader = () => {
        let header = Object.keys(items[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    return (
        <div>
            <h1 id='title'>Employees Table</h1>
            {items.length && (
                <table id='customers'>
                    <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default EmployeesTable;
