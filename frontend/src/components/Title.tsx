interface Props {
  name: string;
}
const Title = ({ name }: Props) => {
  return <div id="sigTitle">{name}</div>;
};

export default Title;
