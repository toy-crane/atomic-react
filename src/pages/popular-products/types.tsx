interface Brand {
	id: number;
	brandName: string;
	imgUrl: string;
	bannerUrl: string;
}

interface ProductPost {
	id: number;
	postImgUrl: string;
	productImgUrl: string;
	productName: string;
	productPrice: number;
}

export type { Brand, ProductPost };
