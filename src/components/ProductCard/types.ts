import { SyntheticEvent } from "react";

export interface Product {
    id: number;
    name: string;
    rating: number;
    onRatingChange: (id: number, rating: number) => void;
    type: 'Electronics' | 'Fashion' | 'Tea' | 'Tea Bag' | 'Board Game' | 'Sports' | 'Facility';
    curPrice: number;
    prevPrice?: number;
    onSale?: boolean;
    image: string;
    isFavorite?: boolean;
    onFavoriteChange?: (id: number) => void;
}

export interface ProductSectionProps extends Product{
    handleAddtoCart: (product: Product) => void;
}