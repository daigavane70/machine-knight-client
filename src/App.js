import { Field, Formik } from "formik";
import "./App.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {
  facingMapping,
  furnishingMapping,
  localityMapping,
  sampleInput,
  tenantsMapping,
  typesMapping,
  waterSuppyMapping,
} from "./utils/mappings";
import Select from "react-select";
import { predict } from "./api/requests";

function App() {
  const [filters, setFilters] = useState({ ...sampleInput });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);

  // ['ANYONE', 'BACHELOR', 'COMPANY', 'FAMILY'] -- [0 1 2 3]
  const l1 = ["BOREWELL", "CORPORATION", "CORP_BORE"];

  const l2 = [0, 1, 2];

  const obj = {};

  l1.forEach((ele, i) => {
    obj[ele] = l2[i];
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setFilters(values);
    const res = await predict(values);
    console.log(res);
    setResult(0);
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Header */}
      <div className="p-4 bg-gray-600 h-[60px] shadow-md grid md:grid-cols-3 content-center justify-items-center fixed top-0 left-0 w-full">
        <h1 className="tracking-widest font-bold text-lg text-cyan-500">
          Dharmiks 1.0
        </h1>
        <h1 className="tracking-widest font-light text-2xl">
          House Rent Predictor
        </h1>
        <div></div>
      </div>

      {/* Body */}
      <div className="h-screen pt-[60px]">
        <div className="mx-auto p-4 grid md:grid-cols-8 gap-4 h-full">
          <div className="md:col-span-2 bg-gray-800 rounded-md h-full w-full p-4 space-y-2">
            <h2 className="tracking-widest font-bold text-blue-500 border-b pb-1 border-gray-500">
              Filters
            </h2>
            <Filter onSubmit={handleSubmit}></Filter>
          </div>
          <div className=" md:col-span-6 shadow-md rounded-lg border border-gray-500 h-full w-full p-2 bg-gray-800 overflow-auto">
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
                  {loading ? (
                    <div className="text-7xl text-blue-600">Predicting...</div>
                  ) : (
                    <>
                      <div className="text-2xl text-gray-400">Rs.</div>
                      <div className="text-7xl text-green-500">{result}</div>
                    </>
                  )}
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
                <table className="text-white font-light text-sm">
                  <tbody>
                    {Object.keys(filters).map((k, i) => {
                      return (
                        <tr key={i}>
                          <th>
                            <span className="text-sm">{k}</span>
                          </th>
                          <th>{filters[k]}</th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
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
        type: 1,
        locality: 466,
        latitude: 12.9344709,
        longitude: 77.634471,
        lease_type: 3,
        negotiable: false,
        furnishing: 2,
        parking: false,
        property_size: 1250,
        property_age: 25,
        bathroom: 2,
        facing: 0,
        cup_board: 2,
        floor: 6,
        total_floor: 12,
        water_supply: 2,
        building_type: 0,
        balconies: 2,
        VP: 1,
        PB: 1,
        HK: 0,
        STP: 1,
        RWH: 1,
        PARK: 0,
        GP: 1,
        SC: 1,
        SECURITY: 1,
        SERVANT: 0,
        FS: 1,
        CPA: 1,
        GYM: 1,
        CLUB: 1,
        LIFT: 1,
        INTERNET: 1,
        AC: 0,
        INTERCOM: 1,
        POOL: 1,
      }}
      onSubmit={(values) => {
        onSubmit({
          ...values,
          negotiable: values.negotiable ? 1 : 0,
          parking: values.parking ? 1 : 0,
        });
      }}
    >
      {(formik) => {
        return (
          <div className="space-y-4">
            {/*  */}
            <div className="space-y-1">
              <div className={filterTitle}>Type</div>
              <div className="inline-block relative w-full">
                <Field as="select" name="type" className={fieldClassName()}>
                  {types.map((ele, index) => {
                    return (
                      <option key={index} value={ele.value}>
                        {ele.label}
                      </option>
                    );
                  })}
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
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
              <div className={filterTitle}>Locality</div>
              <Select
                options={Object.keys(localityMapping).map((ele) => {
                  return { label: ele, value: localityMapping[ele] };
                })}
                onChange={(data) => {
                  formik.setValues({ ...formik.values, locality: data.value });
                }}
                className="text-xs bg-transparent"
              ></Select>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-1">
              <div className="space-y-1">
                <div className={filterTitle}>Latitude</div>
                <Field name="latitude" className={fieldClassName()}></Field>
              </div>
              <div className="space-y-1">
                <div className={filterTitle}>Longitude</div>
                <Field name="longitude" className={fieldClassName()}></Field>
              </div>
            </div>
            <div className={getGridClassName(3, 1)}>
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Lease type</div>
                <div className="inline-block relative w-full">
                  <Field
                    as="select"
                    name="lease_type"
                    className={fieldClassName()}
                  >
                    {Object.keys(tenantsMapping).map((ele, index) => {
                      return (
                        <option key={index} value={tenantsMapping[ele]}>
                          {ele}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
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
                <div className={filterTitle}>Facing</div>
                <div className="inline-block relative w-full">
                  <Field as="select" name="facing" className={fieldClassName()}>
                    {Object.keys(facingMapping).map((ele, index) => {
                      return (
                        <option key={index} value={tenantsMapping[ele]}>
                          {ele}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
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
                <div className={filterTitle}>Water supply</div>
                <div className="inline-block relative w-full">
                  <Field
                    as="select"
                    name="water_supply"
                    className={fieldClassName()}
                  >
                    {Object.keys(waterSuppyMapping).map((ele, index) => {
                      return (
                        <option key={index} value={tenantsMapping[ele]}>
                          {ele}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
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
            <div className={getGridClassName(3, 1)}>
              <div>
                <div className={filterTitle}>Property size</div>
                <Field
                  className={fieldClassName()}
                  type="number"
                  name="property_size"
                ></Field>
              </div>
              <div>
                <div className={filterTitle}>Property age</div>
                <Field
                  className={fieldClassName()}
                  name="property_age"
                  type="number"
                ></Field>
              </div>
              <div>
                <div className={filterTitle}>Bathroom</div>
                <Field
                  className={fieldClassName()}
                  name="bathroom"
                  type="number"
                ></Field>
              </div>
              <div>
                <div className={filterTitle}>Cup board</div>
                <Field
                  className={fieldClassName()}
                  name="cup_board"
                  type="number"
                ></Field>
              </div>
              <div>
                <div className={filterTitle}>Floor</div>
                <Field
                  className={fieldClassName()}
                  name="floor"
                  type="number"
                ></Field>
              </div>
              <div>
                <div className={filterTitle}>Total floors</div>
                <Field
                  className={fieldClassName()}
                  name="total_floor"
                  type="number"
                ></Field>
              </div>
              {/*  */}
              <div className="space-y-1">
                <div className={filterTitle}>Furnishing</div>
                <div className="inline-block relative w-full">
                  <Field
                    as="select"
                    name="furnishing"
                    className={fieldClassName()}
                  >
                    {furnishing.map((ele, index) => {
                      return (
                        <option key={index} value={ele.value}>
                          {ele.label}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
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
                <div className="inline-block relative w-full">
                  <Field as="select" name="floor" className={fieldClassName()}>
                    {[...Array(10).keys()].map((ele, index) => {
                      return (
                        <option value={ele}>
                          {ele === 0 ? "Ground" : ele}
                        </option>
                      );
                    })}
                  </Field>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
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
            <div className={getGridClassName(2, 1)}>
              {/* Negotiable */}
              <label className="flex space-x-2 text-xs">
                <Field type="checkbox" name="negotiable"></Field>
                <div className=" text-gray-400 ">Negotiable</div>
              </label>
              {/* Parking */}
              <label className="flex space-x-2 text-xs">
                <Field type="checkbox" name="parking"></Field>
                <div className=" text-gray-400 ">Parking</div>
              </label>
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
  { value: typesMapping["RK1"], label: "1 RK" },
  { value: typesMapping["BHK1"], label: "1 BHK" },
  { value: typesMapping["BHK2"], label: "2 BHK" },
  { value: typesMapping["BHK3"], label: "3 BHK" },
  { value: typesMapping["BHK4"], label: "4 BHK" },
  { value: typesMapping["BHK4PLUS"], label: "4 BHK+" },
];

const furnishing = [
  { value: furnishingMapping["FULLY_FURNISHED"], label: "Furnished" },
  { value: furnishingMapping["SEMI_FURNISHED"], label: "Semi furnished" },
  { value: furnishingMapping["NOT_FURNISHED"], label: "Not furnished" },
];

const filterTitle = "text-sm px-1 text-gray-300";

const fieldClassName = (padding = false) =>
  `block appearance-none w-full bg-transparent border font-light border-gray-600 hover:border-gray-500 px-2 py-2 pr-${
    padding && 8
  } rounded shadow leading-tight focus:outline-none focus:shadow-outline text-xs text-gray-400`;

function getGridClassName(size = 2, gap = 1) {
  return `grid grid-cols-${size} gap-${gap}`;
}

export default App;
