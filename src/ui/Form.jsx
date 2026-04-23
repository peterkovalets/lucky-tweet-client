function Form({ children, onSubmit, size = 'medium' }) {
  const base = 'grow rounded-md bg-slate-50 px-6 py-8 text-center ';

  const sizes = {
    medium: base + 'max-w-md',
    full: base + 'max-w-full',
  };

  return (
    <form onSubmit={onSubmit} className={sizes[size]}>
      {children}
    </form>
  );
}

export default Form;
