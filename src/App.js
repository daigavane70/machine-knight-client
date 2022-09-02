import { Field, Formik } from "formik";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

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
          <div className="space-y-2">
            {/*  */}
            <div className="space-y-1">
              <div className="text-sm px-1 font-light text-gray-500">City</div>
              <div class="inline-block relative w-full">
                <Field as="select" name="location" className={fieldClassName}>
                  <option value="red">Pune</option>
                  <option value="green">Bangalore</option>
                  <option value="blue">Chennai</option>
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
            <div className="grid grid-cols-2 gap-1">
              {/*  */}
              <div className="space-y-1">
                <div className="text-sm px-1 font-light text-gray-500">
                  Type
                </div>
                <div className="grid grid-cols-3 gap-2 px-2">
                  {types.map((type, index) => {
                    return (
                      <div className="flex space-x-1 text-xs" key={index}>
                        <Field
                          type="checkbox"
                          name="type"
                          value={type.value}
                        ></Field>
                        <div>{type.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/*  */}
              <div className="space-y-1">
                <div className="text-sm px-1 font-light text-gray-500">
                  Furnishing
                </div>
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
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-1">
              {/*  */}
              <div className="space-y-1">
                <div className="text-sm px-1 font-light text-gray-500">
                  Floor
                </div>
                <div class="inline-block relative w-full">
                  <Field as="select" name="floor" className={fieldClassName}>
                    {[...Array(10).keys()].map((ele, index) => {
                      return (
                        <option value={ele}>{ele == 0 ? "Ground" : ele}</option>
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
                <div className="text-sm px-1 font-light text-gray-500">
                  Available by
                </div>
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
                <div className="text-sm px-1 font-light text-gray-500">
                  Preferred tenants
                </div>
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
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Predict
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

function App() {
  const [filters, setFilters] = useState({});

  return (
    <div className="">
      {/* Header */}
      <div className="p-4 bg-gray-200 h-[60px] shadow-md grid grid-cols-3 content-center justify-items-center fixed top-0 left-0 w-full">
        <h1 className="tracking-widest font-bold text-lg">Dharmiks 1.0</h1>
        <h1 className="tracking-widest font-light text-2xl">
          House Rent Predictor
        </h1>
        <div></div>
      </div>

      {/* Body */}
      <div className=" min-h-screen pt-[60px] p-4">
        <div className=" max-w-[1400px] mx-auto p-8 grid grid-cols-6 gap-4">
          <div className="col-span-2 bg-slate-50 h-full w-full p-2 space-y-2">
            <h2 className=" tracking-widest font-bold text-gray-500 border-b pb-1">
              Filters
            </h2>
            <Filter
              onSubmit={(values) => {
                setFilters(values);
              }}
            ></Filter>
          </div>
          <div className="col-span-4 bg-slate-50 h-full w-full p-2">
            <h2 className=" tracking-widest font-bold text-gray-500 border-b pb-1">
              Prediction
            </h2>
            <div>{JSON.stringify(filters)}</div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
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

const fieldClassName =
  "block appearance-none w-full bg-white border border-gray-200 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-xs";

export default App;
