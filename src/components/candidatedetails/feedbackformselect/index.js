import React from "react";
import { FeedbackFormDropdown } from "./feedbackformselect.style";

const { Option } = FeedbackFormDropdown;

const FeedbackFormSelect = ({ typeInterview }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
    typeInterview(value);
  }
  return (
    <>
      <FeedbackFormDropdown
        placeholder="Interview Type"
        style={{ width: 163 }}
        onChange={handleChange}
      >
        <Option value="Vide Interview">Vide Interview</Option>
        <Option value="Onsite Interview">Onsite Interview</Option>
      </FeedbackFormDropdown>
    </>
  );
};

export default FeedbackFormSelect;
