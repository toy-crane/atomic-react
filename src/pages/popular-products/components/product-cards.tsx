import { Brand, ProductPost } from "../types";
import ProductCard from "./product-card";

interface Props {
	selectedBrand: Brand;
}

const getMockProducts = (brandId: number) => MOCK_PRODUCT_POST;

const MOCK_PRODUCT_POST: { loading: boolean; data: ProductPost[] } = {
	loading: false,
	data: [
		{
			id: 1,
			postImgUrl: "logo192.png",
			productImgUrl: "logo192.png",
			productName: "나이키 신발",
			productPrice: 123,
		},
		{
			id: 2,
			postImgUrl: "logo192.png",
			productImgUrl: "logo192.png",
			productName: "나이키 신발2",
			productPrice: 1234,
		},
		{
			id: 3,
			postImgUrl: "logo192.png",
			productImgUrl: "logo192.png",
			productName: "나이키 신발3",
			productPrice: 1235,
		},
	],
};

const ProductCards = ({ selectedBrand }: Props) => {
	const { loading, data: productPosts } = getMockProducts(selectedBrand.id);

	if (loading) {
		return <div>Loading....</div>;
	}
	return (
		<div>
			{productPosts?.map((productPost) => (
				<ProductCard
					{...productPost}
					onClick={() => {
						console.log(productPost.id);
					}}
				/>
			))}
		</div>
	);
};

export default ProductCards;
