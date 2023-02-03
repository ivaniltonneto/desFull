import { forwardRef } from 'react';
import { ReactNode } from 'react';

import { Container } from './styles';

interface IDivInput {
  children?: ReactNode;
  label: string;
  placeholder: string;
  errors: any;
  type?: string;
  value?: string;
}

export const DivInput = forwardRef<HTMLInputElement, IDivInput>(
  ({ label, placeholder, errors, type, value, children, ...register }, ref) => {
    return (
      <Container>
        <label>{label}</label>
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          {...register}
          ref={ref}
        />
        <span>{errors}</span> {children}
      </Container>
    );
  }
);
