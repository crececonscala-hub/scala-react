import "./Button.css";

export default function Button({
  children,
  href = "#",
  variant = "primary"
}) {

  if (href) {
    return (
      <a
        href={href}
        className={`btn btn-${variant}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );

}