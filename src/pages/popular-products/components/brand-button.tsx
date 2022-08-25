import { Brand } from "../types";

type Props = {
	onClick: () => void;
} & Brand;

const BrandButton = ({ imgUrl, brandName, onClick }: Props) => {
	return (
		<div onClick={onClick}>
			<img src={imgUrl} alt="brand Button" />
			<div>{brandName}</div>
		</div>
	);
};

export default BrandButton;
