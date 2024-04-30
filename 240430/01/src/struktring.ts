import { Iperson, ICompany } from "./iPerson_iCompany";

const jack: Iperson = {
  name: "jack",
  age: 22,
};

const apple: ICompany = {
  name: "apple",
  age: 40,
};

let { name, age } = jack;
