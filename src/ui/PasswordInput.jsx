import { forwardRef, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import Input from './Input';

const PasswordInput = forwardRef(function PasswordInput(props, ref) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className="w-full pr-12"
        ref={ref}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword((show) => !show)}
        className="absolute right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-slate-500"
      >
        {showPassword ? (
          <HiOutlineEyeSlash className="h-6 w-6" />
        ) : (
          <HiOutlineEye className="h-6 w-6" />
        )}
      </button>
    </div>
  );
});

export default PasswordInput;
