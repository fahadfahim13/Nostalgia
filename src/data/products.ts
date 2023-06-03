import { Product } from 'components/ProductCard/types';
import Ludo from '../Assets/ludo.avif';
import Chess from '../Assets/chess.avif';
import Carrom from '../Assets/carrom.avif';
import Cards from '../Assets/cards.avif';
import Badminton from '../Assets/badminton.avif';
import Cricket from '../Assets/cricket.avif';
import Football from '../Assets/football.avif';
import Kids from '../Assets/kids.avif';
import Museum from '../Assets/museum1.avif';
import FoodCourt from '../Assets/food.avif';
import Gossip from '../Assets/gossip.avif';
import Relax from '../Assets/relax.avif';

export const ALL_PRODUCTS: Product[] = [
  {
    id: 0,
    name: 'Ludo',
    rating: 4.5,
    onRatingChange: () => {},
    type: 'Board Game',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Ludo,
  },
  {
    id: 1,
    name: 'Chess',
    rating: 5,
    onRatingChange: () => {},
    type: 'Board Game',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Chess,
  },
  {
    id: 2,
    name: 'Carrom',
    rating: 5,
    onRatingChange: () => {},
    type: 'Board Game',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Carrom,
  },
  {
    id: 3,
    name: 'Cards',
    rating: 2,
    onRatingChange: () => {},
    type: 'Board Game',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Cards,
  },
  {
    id: 4,
    name: 'Badminton',
    rating: 3,
    onRatingChange: () => {},
    type: 'Sports',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Badminton,
  },
  {
    id: 5,
    name: 'Indoor Football',
    rating: 4,
    onRatingChange: () => {},
    type: 'Sports',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Football,
  },
  {
    id: 6,
    name: 'Indoor Cricket',
    rating: 5,
    onRatingChange: () => {},
    type: 'Sports',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: false,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Cricket,
  },
  {
    id: 7,
    name: "Children's Zone",
    rating: 4,
    onRatingChange: () => {},
    type: 'Facility',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Kids,
  },
  {
    id: 8,
    name: "Museum",
    rating: 3,
    onRatingChange: () => {},
    type: 'Facility',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Museum,
  },
  {
    id: 9,
    name: "Food Court",
    rating: 5,
    onRatingChange: () => {},
    type: 'Facility',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: FoodCourt,
  },
  {
    id: 10,
    name: "Gossip Zone",
    rating: 3,
    onRatingChange: () => {},
    type: 'Facility',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Gossip,
  },
  {
    id: 11,
    name: "Relaxing Room",
    rating: 4,
    onRatingChange: () => {},
    type: 'Facility',
    curPrice: 1725,
    prevPrice: 1725,
    onSale: true,
    isFavorite: false,
    onFavoriteChange: () => {},
    image: Relax,
  },
];