import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  placeholder: string;
  children?: ReactNode;
  style?: React.CSSProperties | undefined;
}

export const InputField = ({ placeholder, style, children }: InputFieldProps) => {
  const [text, setText] = useState('');
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <Input
      type="text"
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style}
    />
  );
};

const Input = styled.input`
  background: #0d0b0c;
  border: 1px solid #262123;
  width: 310px;
  height: 56px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  gap: 10px;

  transition: 0.3s;
  color: #f2ebef;
  font-family: Public Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }
`;
