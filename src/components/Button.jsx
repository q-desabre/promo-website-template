const Button = ({ id, title, rightIcon, leftIcon, containerClass, href }) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href; // or use window.open(href, '_blank') if you want a new tab
    }
  };

  return (
    <button
      id={id}
      onClick={handleClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-inter text-xs uppercase">
        <div className="font-bold translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="font-bold absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
