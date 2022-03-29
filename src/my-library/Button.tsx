interface Props {
  content: string
  className?: any
}

const Button: React.FC<Props> = ({ className, content }) => {
  return (
    <button className={className}>
      {content}
    </button>
  );
};

export default Button;
