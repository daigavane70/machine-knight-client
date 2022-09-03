import { Field, Formik } from "formik";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({});

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Header */}
      <div className="p-4 bg-gray-200 h-[60px] shadow-md grid md:grid-cols-3 content-center justify-items-center fixed top-0 left-0 w-full">
        <h1 className="tracking-widest font-bold text-lg">Dharmiks 1.0</h1>
        <h1 className="tracking-widest font-light text-2xl">
          House Rent Predictor
        </h1>
        <div></div>
      </div>

      {/* Body */}
      <div className="min-h-screen pt-[60px]">
        <div className="mx-auto p-4 grid md:grid-cols-8 gap-4 h-full">
          <div className="col-span-2 bg-gray-800 rounded-md h-full w-full p-4 space-y-2">
            <h2 className="tracking-widest font-bold text-blue-500 border-b pb-1 border-gray-500">
              Filters
            </h2>
            <Filter
              onSubmit={(values) => {
                setFilters(values);
              }}
            ></Filter>
          </div>
          <div className=" col-span-6 shadow-md rounded-lg border border-gray-500 h-full w-full p-2 bg-gray-800">
            <h2 className="font-light text-gray-400 border-b border-gray-600 pb-1 text-2xl">
              Prediction
            </h2>
            <div className="grid md:grid-cols-3 justify-items-center text-center py-8">
              <div>
                <div></div>
                <div></div>
              </div>
              <div className="">
                <div className="flex items-end justify-center space-x-2">
                  <div className="text-2xl text-gray-400">Rs.</div>
                  <div className="text-7xl text-green-500">2000</div>
                </div>
                <div></div>
              </div>
              <div></div>
            </div>
            <div className=" space-y-4">
              <div className=" border-b border-gray-500 text-gray-400 font-light tracking-wider">
                Other available prices
              </div>
              <div className="space-x-4">
                {[...Array(10).keys()].map((ele) => {
                  return (
                    <div className="p-1 px-4 border border-gray-500 text-cyan-400 inline-block rounded-md">
                      Rs. {ele * 5000 + 1000}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

function Filter({ onSubmit }) {
  return (
    <Formik
      initialValues={{
        location: "",
        type: [],
        availableBy: "",
        tenants: "",
        furnishing: "",
        floor: 0,
      }}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {(formik) => {
        return (
          <div className="space-y-4">
            {/*  */}
            <div className="space-y-1">
              <div className={filterTitle}>City</div>
              <div class="inline-block relative w-full">
                <Field as="select" name="location" className={fieldClassName}>
                  <option value="pune">Pune</option>
                  <option value="bangalore">Bangalore</option>
                  <option value="chennai">Chennai</option>
                </Field>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="space-y-1">
              <div className={filterTitle}>Type</div>
              <div className="grid grid-cols-5 gap-2 px-2">
                {types.map((type, index) => {
                  return (
                    <div className="flex space-x-2 text-xs" key={index}>
                      <Field
                        type="checkbox"
                        name="type"
                        value={type.value}
                        id="vue-checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-400 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      ></Field>
                      <div className=" text-gray-400 ">{type.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/*  */}
            <div className="grid grid-cols-2 gap-1">
              {/*  */}
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Furnishing</div>
                <div class="inline-block relative w-full">
                  <Field
                    as="select"
                    name="furnishing"
                    className={fieldClassName}
                  >
                    {furnishing.map((ele, index) => {
                      return <option value={ele.value}>{ele.label}</option>;
                    })}
                  </Field>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Floor</div>
                <div class="inline-block relative w-full">
                  <Field as="select" name="floor" className={fieldClassName}>
                    {[...Array(10).keys()].map((ele, index) => {
                      return (
                        <option value={ele}>
                          {ele === 0 ? "Ground" : ele}
                        </option>
                      );
                    })}
                  </Field>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-1">
                <div className={filterTitle}>Available by</div>
                <div class="inline-block relative w-full">
                  <DatePicker
                    selected={formik.values.availableBy}
                    dateFormat="MMMM d, yyyy"
                    className={fieldClassName + ""}
                    name="availableBy"
                    onChange={(date) =>
                      formik.setFieldValue("availableBy", date)
                    }
                  />
                </div>
              </div>
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Preferred tenants</div>
                <div class="inline-block relative w-full">
                  <Field as="select" name="tenants" className={fieldClassName}>
                    <option value="red">Family</option>
                    <option value="green">Bachelore</option>
                    <option value="blue">Any</option>
                  </Field>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={formik.handleSubmit}
              className="text-white bg-transparent bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Predict
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

const types = [
  { value: "RK1", label: "1 RK" },
  { value: "BHK1", label: "1 BHK" },
  { value: "BHK2", label: "2 BHK" },
  { value: "BHK3", label: "3 BHK" },
  { value: "BHK4", label: "4 BHK" },
];

const furnishing = [
  { value: "furnished", label: "Furnished" },
  { value: "semifurnished", label: "Semi furnished" },
  { value: "unfurnished", label: "Un furnished" },
];

const filterTitle = "text-sm px-1 text-gray-300";

const fieldClassName =
  "block appearance-none w-full bg-transparent border font-light border-gray-600 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-xs text-gray-400";

export default App;
