import React, { useState } from 'react';
import styled from 'styled-components';

export const SearchField = () => {
  const [text, setText] = useState('');
  const handleChange = (event: any) => {
    setText(event.target.value);
  };
  return (
    <form>
      <StyledInput className={'inputWithIcon'}>
        <Input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Zoek een evenement, clubavond, festival"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 6.5C6.345 6.5 5 7.845 5 9.5V22.5C5 24.155 6.345 25.5 8 25.5H19.4648L19.9902 24.9746C19.7952 24.4996 19.6551 24.005 19.5801 23.5H8C7.45 23.5 7 23.05 7 22.5V12C7 11.45 7.45 11 8 11H24C24.55 11 25 11.45 25 12V16.0752C25.33 16.0252 25.66 16 26 16C26.34 16 26.67 16.0252 27 16.0752V9.5C27 7.845 25.655 6.5 24 6.5H8ZM11.25 12.75C10.6975 12.75 10.25 13.1975 10.25 13.75C10.25 14.3025 10.6975 14.75 11.25 14.75C11.8025 14.75 12.25 14.3025 12.25 13.75C12.25 13.1975 11.8025 12.75 11.25 12.75ZM14.25 13C13.836 13 13.5 13.3355 13.5 13.75C13.5 14.1645 13.836 14.5 14.25 14.5H20.75C21.164 14.5 21.5 14.1645 21.5 13.75C21.5 13.3355 21.164 13 20.75 13H14.25ZM11.25 16.25C10.6975 16.25 10.25 16.6975 10.25 17.25C10.25 17.8025 10.6975 18.25 11.25 18.25C11.8025 18.25 12.25 17.8025 12.25 17.25C12.25 16.6975 11.8025 16.25 11.25 16.25ZM14.25 16.5C13.836 16.5 13.5 16.8355 13.5 17.25C13.5 17.6645 13.836 18 14.25 18H20.75C21.164 18 21.5 17.6645 21.5 17.25C21.5 16.8355 21.164 16.5 20.75 16.5H14.25ZM26 17.5C23.243 17.5 21 19.743 21 22.5C21 23.5175 21.3066 24.4644 21.8311 25.2549L19.293 27.793C18.9025 28.1835 18.9025 28.8165 19.293 29.207C19.4885 29.4025 19.744 29.5 20 29.5C20.256 29.5 20.5115 29.4025 20.707 29.207L23.2451 26.6689C24.0356 27.1934 24.9825 27.5 26 27.5C28.757 27.5 31 25.257 31 22.5C31 19.743 28.757 17.5 26 17.5ZM26 19.5C27.6545 19.5 29 20.8455 29 22.5C29 24.1545 27.6545 25.5 26 25.5C24.3455 25.5 23 24.1545 23 22.5C23 20.8455 24.3455 19.5 26 19.5ZM11.25 19.75C10.6975 19.75 10.25 20.1975 10.25 20.75C10.25 21.3025 10.6975 21.75 11.25 21.75C11.8025 21.75 12.25 21.3025 12.25 20.75C12.25 20.1975 11.8025 19.75 11.25 19.75ZM14.25 20C13.835 20 13.5 20.335 13.5 20.75C13.5 21.165 13.835 21.5 14.25 21.5H19.5752C19.6602 20.98 19.8 20.475 20 20H14.25Z"
            fill="#665C61"
          />
        </svg>
      </StyledInput>
    </form>
  );
};

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px;
  gap: 12px;
  opacity: 0.8999999761581421px;
  transition: 0.3s;
  color: black;
  weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: left;
  padding-left: 40px;

  :focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 634px;
    height: 64px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 634px;
    height: 64px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 634px;
    height: 64px;
  }
`;

const StyledInput = styled.div`
  width: calc(100% - 48px);
  margin-left: 24px;
  margin-right: 24px;
  svg {
    position: absolute;
    left: 0;
    top: 4px;
    padding: 9px 8px;
    fill: black;
    transition: 0.3s;
    width: 40px;
    height: 40px;
    ${({ theme }) => theme.mediaQueries.md} {
      top: 12px;
    }
  }

  input:focus + svg {
    fill: dodgerBlue;
  }

  &.inputWithIcon {
    position: relative;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    width: 634px;
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 634px;
    margin-left: auto;
    margin-right: auto;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    width: 634px;
    margin-left: auto;
    margin-right: auto;
  }
`;
