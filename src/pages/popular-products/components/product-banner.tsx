import { Brand } from "../types";

type Props = Pick<Brand, "bannerUrl">;

const ProductBanner = ({ bannerUrl }: Props) => {
	// 아쉽지만 현재에서 베스트
	return (
		<div onClick={() => console.log("banner Click")}>
			<img src={bannerUrl} alt="product Banner" />
		</div>
	);
};

export default ProductBanner;
