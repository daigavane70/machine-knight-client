import { Field, Formik } from "formik";
import "./App.css";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import {
  facingMapping,
  houseTypeMapping,
  localityMapping,
  sampleInput,
  tenantsMapping,
  waterSuppyMapping,
} from "./utils/mappings";
import Select from "react-select";
import { predict } from "./api/requests";
import {
  ameneties,
  fieldClassName,
  filterTitle,
  furnishing,
  types,
} from "./utils/utils";

function App() {
  const [filters, setFilters] = useState({ ...sampleInput });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(0);
  const [error, seterror] = useState("");

  // ['ANYONE', 'BACHELOR', 'COMPANY', 'FAMILY'] -- [0 1 2 3]
  const l1 = ["BOREWELL", "CORPORATION", "CORP_BORE"];

  const l2 = [0, 1, 2];

  const obj = {};

  l1.forEach((ele, i) => {
    obj[ele] = l2[i];
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    seterror("");
    setFilters(values);
    try {
      const res = await predict(values);
      console.log(res);
      setResult(res.data);
    } catch (err) {
      seterror("An error occured, please try again");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black">
      {/* Header */}
      <div className="p-4 bg-gray-800 h-[60px] shadow-md grid md:grid-cols-3 content-center justify-items-center fixed top-0 left-0 w-full z-10">
        <h1 className="tracking-widest font-md text-lg text-cyan-500">
          Dharmiks 1.0
        </h1>
        <h1 className="tracking-widest font-bold text-2xl text-cyan-500">
          House Rent Predictor
        </h1>
        <div></div>
      </div>
      {/* Body */}
      <div className="h-screen pt-[60px] overflow-auto">
        <div className="mx-auto p-4 md:h-full grid md:grid-cols-8 gap-4 overflow-auto">
          <div className="md:col-span-2 bg-gray-800 rounded-md h-full w-full p-4 space-y-2">
            <h2 className="tracking-widest font-bold text-cyan-400 border-b pb-1 border-gray-500">
              Filters
            </h2>
            <Filter onSubmit={handleSubmit}></Filter>
          </div>
          <div className=" md:col-span-6 grid gap-4">
            <div className=" shadow-md rounded-lg border border-gray-500 w-full p-2 bg-gray-800 overflow-auto">
              <h2 className="font-light text-gray-400 border-b border-gray-600 pb-1 text-2xl">
                Prediction
              </h2>
              <div className="flex items-center justify-center space-x-2 min-h-[300px]">
                <div className="flex space-x-2 items-end justify-center">
                  {error ? (
                    <div className=" text-2xl md:text-7xl text-red-500">
                      {error}
                    </div>
                  ) : loading ? (
                    <div className=" text-4xl md:text-7xl text-blue-600">
                      Predicting...
                    </div>
                  ) : (
                    <>
                      <div className="text-lg md:text-2xl text-cyan-400">
                        Rs.
                      </div>
                      <div className=" text-4xl md:text-7xl text-emerald-500">
                        {result}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className=" shadow-md rounded-lg border border-gray-500 w-full p-2 bg-gray-800 overflow-auto">
              <div className=" space-y-4">
                <div className=" text-cyan-400 font-light border-b border-gray-600">
                  Parameters sent to ml model
                </div>
                <div className="text-white font-light text-xs grid grid-cols-2 md:grid-cols-4 gap-2">
                  {Object.keys(filters).map((k, i) => {
                    return (
                      <div
                        key={i}
                        className="flex space-x-2 bg-gray-700/20 p-1 rounded font-thin"
                      >
                        <div className=" font-normal text-gray-300">{k}</div>
                        <div>:</div>
                        <div className="">{filters[k]}</div>
                      </div>
                    );
                  })}
                </div>
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
        locality: localityMapping[Object.keys(localityMapping)[0]],
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
        VP: true,
        PB: true,
        HK: false,
        STP: true,
        RWH: true,
        PARK: false,
        GP: true,
        SC: true,
        SECURITY: true,
        SERVANT: false,
        FS: true,
        CPA: true,
        GYM: true,
        CLUB: true,
        LIFT: true,
        INTERNET: true,
        AC: false,
        INTERCOM: true,
        POOL: true,
      }}
      onSubmit={(values) => {
        const amenetiesMapping = {};

        Object.keys(ameneties).forEach((k) => {
          amenetiesMapping[k] = values[k] ? 1 : 0;
        });

        onSubmit({
          ...values,
          negotiable: values.negotiable ? 1 : 0,
          parking: values.parking ? 1 : 0,
          ...amenetiesMapping,
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
                defaultInputValue={Object.keys(localityMapping)[0]}
                defaultValue={localityMapping[Object.keys(localityMapping)[0]]}
                onChange={(data) => {
                  formik.setValues({ ...formik.values, locality: data.value });
                }}
                className="text-xs bg-transparent"
                // styles={ReactSelectCustomStyles}
                styles={{
                  control: (provided) => {
                    return {
                      ...provided,
                      background: "none",
                      borderColor: "gray",
                      color: "white",
                    };
                  },
                  singleValue: (provided) => {
                    return {
                      ...provided,
                      color: "white",
                    };
                  },
                  input: (provided) => {
                    return {
                      ...provided,
                      color: "white",
                      overflow: "hidden",
                    };
                  },
                }}
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
            <div className={"grid grid-cols-3 gap-1"}>
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
                        <option key={index} value={waterSuppyMapping[ele]}>
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
            <div className={"grid grid-cols-3 gap-1"}>
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
                <div className={filterTitle}>Building type</div>
                <div className="inline-block relative w-full">
                  <Field
                    as="select"
                    name="building_type"
                    className={fieldClassName()}
                  >
                    {Object.keys(houseTypeMapping).map((ele, index) => {
                      return (
                        <option value={houseTypeMapping[ele]}>{ele}</option>
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
              <div className="space-y-1">
                <div className={filterTitle}>Balconies</div>
                <Field
                  className={fieldClassName()}
                  name="balconies"
                  type="number"
                ></Field>
              </div>
            </div>
            <div></div>
            {/*  */}
            <div className="space-y-2">
              <div className="text-cyan-400 font-bold tracking-wider border-b border-gray-500 pb-1">
                Amenities
              </div>
              <div className={"grid grid-cols-3 md:grid-cols-5 gap-2"}>
                <label className="flex space-x-2 text-xs">
                  <Field type="checkbox" name="negotiable"></Field>
                  <div className=" text-gray-400 ">Negotiable</div>
                </label>
                {/* Parking */}
                <label className="flex space-x-2 text-xs">
                  <Field type="checkbox" name="parking"></Field>
                  <div className=" text-gray-400 ">Parking</div>
                </label>
                {Object.keys(ameneties).map((k, i) => {
                  return (
                    <label className="flex space-x-2 text-xs">
                      <Field type="checkbox" name={k}></Field>
                      <div className=" text-gray-400 ">{k}</div>
                    </label>
                  );
                })}
              </div>
            </div>
            <button
              onClick={formik.handleSubmit}
              className="text-white bg-transparent bg-gradient-to-br from-green-400/20 to-blue-600/50  bg-cyan-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
            >
              Predict
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

export default App;
