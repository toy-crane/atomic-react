import { ProductPost } from "../types";

type Props = {
	onClick: () => void;
} & ProductPost;

const ProductCard = ({
	postImgUrl,
	productImgUrl,
	productName,
	productPrice,
	onClick,
}: Props) => {
	return (
		<div onClick={onClick}>
			<img src={postImgUrl} alt="post card" />
			<img src={productImgUrl} alt="post card" />
			<div>{productName}</div>
			<div>{productPrice}</div>
		</div>
	);
};

export default ProductCard;
