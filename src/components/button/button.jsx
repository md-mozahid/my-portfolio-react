const Button = ({ children, type, className, ...rest }) => {
  return (
    <button
      className={`bg-slate-700 px-6 py-2 rounded-lg text-center uppercase text-base ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}>
      {children}
    </button>
  )
}

export default Button
