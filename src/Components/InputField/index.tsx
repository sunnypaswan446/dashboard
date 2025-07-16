import React, { useState } from "react";

interface InputFieldProps {
  type: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  options?: string[]; // For select input types
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  id,
  name,
  label,
  placeholder,
  options,
}) => {
  // Initialize state with the name as a key
  const [formValue, setFormValue] = useState({ [name]: "" });

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prevState) => {
      const updatedState = { ...prevState, [name]: value };
      console.log("Updated State:", updatedState); // Log the updated state
      return updatedState;
    });
  };

  return (
    <label htmlFor={id} className="text__base detail__label">
      <span className="detail__text">{label}</span>
      {type === "select" ? (
        <select
          id={id}
          name={name}
          className="text__base detail__input detail__input--sel"
          value={formValue[name]} // Bind value to state
          onChange={handleChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options?.map((option, index) => (
            <option
              key={index}
              value={option}
              className="detail__option text__base"
            >
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="text__base detail__input"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={formValue[name]} // Bind value to state
          onChange={handleChange}
        />
      )}
    </label>
  );
};

export default InputField;
