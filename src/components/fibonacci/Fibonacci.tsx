import React, { useState } from "react";
import FibonacciService, { Spiral } from "../../api/FibonacciService";
import SnackBarUI from "../snackbar/SnackBarUI";
import "./Fibonacci.css";

const Fibonacci: React.FC = () => {
  const [rows, setRows] = useState('');
  const [cols, setCols] = useState('');
  const [spiral, setSpiral] = useState<Spiral | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleRowsChange = (e: any) => {
    setRows(e.target.value);
  }

  const handleColsChange = (e: any) => {
      setCols(e.target.value);
  }

  const closeToast = () => {
    setErr('')
  }

  const onCalculate = async () => {
    if (rows === '' || cols === '') {
      return;
    }

    setIsLoading(true);
    
    try {
      const spiral: Spiral = await FibonacciService.getSpiral(+rows, +cols);
      setSpiral(spiral)

    } catch (err: any) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {err != '' && <SnackBarUI message={err} onCloseToast={closeToast}/>}  
      <p className="lead">
      Welcome, fill in the inputs to calculate fibonacci spiral
      </p>
      <div className="mb-6 input-group_box">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">Number of Rows</span>
          <input type="number"
            onChange={handleRowsChange}
            value={rows} 
            className="form-control" 
            id="basic-url" 
            aria-describedby="basic-addon3" 
          />
          <span className="input-group-text" id="basic-addon3">Number of Columns</span>
          <input type="number"
            onChange={handleColsChange}
            value={cols}
            className="form-control" 
            id="basic-url" 
            aria-describedby="basic-addon3" 
          />
          <button className="btn btn-outline-primary" type="submit" onClick={onCalculate}>Calculate</button>
        </div>
      </div>
      {isLoading && 
        <div>
          <p>Loading...</p>
        </div>
      }
      {!isLoading && spiral !== null && 
        <div>
          <p className="lead">Fibonacci Spiral</p>
          <table className="table table-bordered">
          <tbody>
            {spiral.rows.map(row => {
              return (
                <tr>
                 {row.map(col => <td>{col}</td>)}
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Fibonacci;