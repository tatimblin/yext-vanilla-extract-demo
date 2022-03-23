import { buttonStyle } from './styles.css';
import { Button as Recipe } from '../../design-system/cobalt.css';

interface Props {
  variants: any
}

const Button: React.FC<Props> = ({ variants }) => {
  return (
    <button className={`${buttonStyle} ${Recipe(variants)}`}>
      Click Me!
    </button>
  );
};

export default Button;
