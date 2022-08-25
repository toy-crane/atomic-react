import { useState } from "react";
import { Brand } from "../types";
import BrandButtonGroup from "./brand-button-group";
import ProductBanner from "./product-banner";
import ProductCards from "./product-cards";

const MOCK_BRAND: { loading: boolean; data: Brand[] } = {
	loading: false,
	data: [
		{
			id: 1,
			brandName: "nike",
			bannerUrl: "https://images.onthelook.co.kr/pr/pMpXZgePJnj3eipMNbkrM9.png",
			imgUrl: "https://images.onthelook.co.kr/pr/whwaaPCWaSYofKJGmq8cKH.png",
		},
		{
			id: 2,
			brandName: "adidas",
			bannerUrl: "https://images.onthelook.co.kr/pr/uFmw8S58d6f9cxJQPm5TzA.png",
			imgUrl: "https://images.onthelook.co.kr/pr/hhTgwPnFxpr25ek1jun4Am.png",
		},
		{
			id: 3,
			brandName: "puma",
			bannerUrl: "https://images.onthelook.co.kr/pr/iG7q1xENcVS4B9xzLCufn8.png",
			imgUrl: "https://images.onthelook.co.kr/pr/cJ1qK3YmdZqeqBgnMNufuA.png",
		},
	],
};

const PopularProductSectionContainer = () => {
	const { loading: brandLoading, data: brandData } = MOCK_BRAND;
	if (brandLoading) {
		return <div>Loading...</div>;
	}
	if (brandData) {
		return <PopularProductSection brands={brandData}></PopularProductSection>;
	} else {
		return null;
	}
};

const PopularProductSection = ({ brands }: { brands: Brand[] }) => {
	const [selectedBrand, setSelectBrand] = useState<Brand>(brands[0]);

	const handleClickBrand = (brand: Brand) => {
		setSelectBrand(brand);
	};

	return (
		<div>
			{!selectedBrand ? (
				<div>Loading</div>
			) : (
				<ProductBanner bannerUrl={selectedBrand?.bannerUrl}></ProductBanner>
			)}
			<BrandButtonGroup onClick={handleClickBrand} brands={brands} />
			<ProductCards selectedBrand={selectedBrand} />
			<button>{selectedBrand.brandName}</button>
		</div>
	);
};

export default PopularProductSectionContainer;
