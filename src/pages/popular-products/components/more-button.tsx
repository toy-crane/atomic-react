interface Props {
	name: string;
	onClick: () => {};
}

const MoreButton = ({ name, onClick }: Props) => {
	<button onClick={onClick}>{name}</button>;
};

export default MoreButton;
