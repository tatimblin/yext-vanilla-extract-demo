type level = 1 | 2 | 3 | 4 | 5 | 6;

// Heading props
type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
	level: level
}

const Heading: React.FC<HeadingProps> = ({ className, level, children }) => {
	const H = `h${level}` as const

  return (
    <H className={`Heading ${className}`}>
			 {children}
    </H>
  );
};

export default Heading;
