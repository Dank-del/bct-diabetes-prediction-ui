import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState(null);

  function onInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    axios
      .post(
        'https://bct-diabetes-prediction-api.sayan.org.in/predict',
        formData
      )
      .then((v) => {
        setData(v.data);
        console.log(v);
      });
    console.log(JSON.stringify(formData)); // Do something with the formData
  }

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-5xl text-mono text-center text-bold mb-4">
        BCT - Diabetes Prediction
      </h1>
      {data && (
        <div className="alert alert-info shadow-lg mb-3">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current flex-shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Prediction: {data.prediction}</span>
          </div>
        </div>
      )}
      <div className="m-auto">
        <form
          onSubmit={onSubmit}
          className="ml-2 mr-2 gap-2 flex justify-center flex-wrap"
        >
          <input
            type="number"
            required
            placeholder="Pregnancies"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="pregnancies"
            onChange={onInputChange}
          />
          <input
            type="number"
            required
            placeholder="Glucose level"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="glucose"
            onChange={onInputChange}
          />
          <input
            type="number"
            required
            placeholder="Blood Pressure"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="blood_pressure"
            onChange={onInputChange}
          />
          <input
            type="number"
            required
            placeholder="Skin Thickness"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="skin_thickness"
            onChange={onInputChange}
          />
          <input
            type="number"
            required
            placeholder="Insulin"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="insulin"
            onChange={onInputChange}
          />
          <input
            type="number"
            required
            placeholder="BMI"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="bmi"
            onChange={onInputChange}
          />
          <input
            type="number"
            required
            placeholder="Diabetes Pedigree function"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="diabetes_pedigree_function"
            onChange={onInputChange}
          />

          <input
            type="number"
            required
            placeholder="Age"
            className="input input-bordered input-info w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4"
            name="age"
            onChange={onInputChange}
          />
          <button type="submit" className="btn btn-info">
            SUBMIT
          </button>
        </form>
        <div className="flex justify-center flex-col">
          <h1 className="text-4xl text-center text-bold mb-4">
            Heatmap and Histogram
          </h1>
          <div className="flex flex-row">
            <img
              width="50%"
              alt="heatmap"
              src="https://bct-diabetes-prediction-api.sayan.org.in/get-heatmap"
            />
            <img
              width="50%"
              src="https://bct-diabetes-prediction-api.sayan.org.in/get-histogram"
              alt="histogram"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
