import { useState } from "react";
import FormFirst from "./FormFirst";
import FormSecond from "./FormSecond";
import FormThird from "./FormThird";

const App1 = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    sex: "",
    age: "",
    favouritecolor: "",
    employed: "",
    notes: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData) => {
    console.log("Yor're Form is Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <FormFirst next={handleNextStep} data={data} />,
    <FormSecond next={handleNextStep} prev={handlePrevStep} data={data} />,
    <FormThird next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log("Youre data", data);

  return <div>{steps[currentStep]}</div>;
};
<FormFirst />;
<FormSecond />;
<FormThird />;

export default App1;
