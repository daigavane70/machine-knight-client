import { furnishingMapping, typesMapping } from "./mappings";

export function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const types = [
  { value: typesMapping["RK1"], label: "1 RK" },
  { value: typesMapping["BHK1"], label: "1 BHK" },
  { value: typesMapping["BHK2"], label: "2 BHK" },
  { value: typesMapping["BHK3"], label: "3 BHK" },
  { value: typesMapping["BHK4"], label: "4 BHK" },
  { value: typesMapping["BHK4PLUS"], label: "4 BHK+" },
];

export const furnishing = [
  { value: furnishingMapping["FULLY_FURNISHED"], label: "Furnished" },
  { value: furnishingMapping["SEMI_FURNISHED"], label: "Semi furnished" },
  { value: furnishingMapping["NOT_FURNISHED"], label: "Not furnished" },
];

export const filterTitle = "text-sm px-1 text-gray-300";

export const fieldClassName = (padding = false) =>
  `block appearance-none w-full bg-transparent border font-light border-gray-600 hover:border-gray-500 px-2 py-2 pr-${
    padding && 8
  } rounded shadow leading-tight focus:outline-none focus:shadow-outline text-xs text-gray-400`;

export function getGridClassName(size = 2, gap = 1) {
  return `grid grid-cols-${size} gap-${gap}`;
}

export const ameneties = {
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
};
