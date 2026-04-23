import { Link } from 'react-router-dom';

function Button({ children, to, variant, onClick, ...props }) {
  const base = 'inline-block rounded-md transition-colors duration-300 ';

  const styles = {
    primary: base + 'px-4 py-2 bg-blue-500 text-slate-50 hover:bg-blue-600',
    outline:
      base +
      'px-3.5 py-1.5 bg-slate-50 text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-slate-50',
  };

  if (to)
    return (
      <Link to={to} className={styles[variant]} {...props}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={styles[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;
