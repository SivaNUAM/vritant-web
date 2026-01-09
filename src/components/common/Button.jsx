const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const base =
    "px-5 py-2 rounded-xl font-medium transition focus:outline-none";

  const variants = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    outline:
      "border border-green-700 text-green-700 hover:bg-green-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
