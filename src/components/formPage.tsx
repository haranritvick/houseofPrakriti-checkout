"use client";

import React, { useState } from 'react';

interface formType {
  name: string[];
  setName: (names: string[]) => void;
}

const FormPage: React.FC = () => {
  const [name, setName] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const textInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setName(prevName => {
      const array = [...prevName, inputValue];
      alert(array);
      return array;
    });
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input 
          type="text" 
          value={inputValue}
          onChange={textInput}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormPage;
