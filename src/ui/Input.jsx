import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { error, className, disabled = false, ...props },
  ref,
) {
  return (
    <input
      className={`rounded-md border border-slate-300 px-4 py-2 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2
        ${error ? 'border-red-500' : ''}
        ${disabled ? 'bg-slate-200' : 'bg-transparent'}
        ${className}
      `}
      ref={ref}
      disabled={disabled}
      {...props}
    />
  );
});

export default Input;
