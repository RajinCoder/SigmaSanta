import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  pageName?: string;
}

const Button = ({ name, pageName }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page
    navigate(`/${pageName}`);
  };

  return (
    <button onClick={handleClick} id="SigBut">
      {name}
    </button>
  );
};

export default Button;
