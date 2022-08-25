import { Brand } from "../types";
import BrandButton from "./brand-button";

interface Props {
	brands: Brand[];
	onClick: (brand: Brand) => void;
}

const BrandButtonGroup = ({ brands, onClick }: Props) => {
	return (
		<div>
			{brands.map((brand) => (
				<BrandButton {...brand} onClick={() => onClick(brand)} />
			))}
		</div>
	);
};

export default BrandButtonGroup;
