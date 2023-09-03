import css from './Input.module.css';
import classNames from 'classnames';
import { ChangeEvent } from 'react';

export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  minLength?: number;
  maxLength?: number;
  value?: string;
  id?: string;
  pattern?: string;
}

export function Input(props: IInput) {
  const { id, error, value = '', label, name, ...rest } = props;
  return (
    <>
      <label className={css.label} htmlFor={id || name}>
        {label}
        <input
          className={classNames(css.input, { [css.input_error]: error })}
          id={id || name}
          name={name}
          value={value}
          {...rest}
        />
      </label>
      <span className={css.input_error_text}>{error}</span>
    </>
  );
}
