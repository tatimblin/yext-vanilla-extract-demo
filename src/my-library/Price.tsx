import { useContext } from 'react';
import { MyContext } from '../design-system/my-context'; 

type PriceProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>,
                  HTMLHeadingElement> &
{
	currency?: string
}

const Heading: React.FC<PriceProps> = ({ className, children, currency }) => {
  const config = useContext(MyContext);

  return (
    <span>
      <span className={config.Price.styles.prefix}>
        {currency || config.Price.props.currency}
      </span>
      <span className={className}>
        {children}
      </span>
      <span className={config.Price.styles.suffix}>
        .00
      </span>
    </span>
  );
};

export default Heading;
