import { forwardRef } from 'react';

const Input = forwardRef(function Input({ error, className, ...props }, ref) {
  return (
    <input
      className={`rounded-md border border-slate-300 bg-transparent px-4 py-2 focus:outline-none focus:ring focus:ring-slate-300 focus:ring-offset-2 ${
        error ? 'border-red-500' : ''
      } ${className}`}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
