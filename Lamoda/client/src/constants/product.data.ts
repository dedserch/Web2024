import { IProduct } from "../types/product.type"
import { COLORS } from "./colors.enum"
import { CATEGORIES } from "./categories.enum"

export const mockProducts: IProduct[] = [
  {
    id: "1",
    name: "Кеды",
    description: "Выполнены из натуральной кожи",
    color: COLORS.BLACK,
    category: CATEGORIES.FOOTWEAR,
    price: 350,
    rating: 90,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "2",
    name: "Платье",
    description: "Элегантное вечернее платье",
    color: COLORS.BLUE,
    category: CATEGORIES.DRESS,
    price: 200,
    rating: 85,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "3",
    name: "Куртка",
    description: "Теплая куртка для осени",
    color: COLORS.BROWN,
    category: CATEGORIES.JACKET,
    price: 150,
    rating: 80,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "4",
    name: "Кроссовки",
    description: "Для бега",
    color: COLORS.RED,
    category: CATEGORIES.FOOTWEAR,
    price: 110,
    rating: 73,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "5",
    name: "Юбка",
    description: "Красивая юбка для лета",
    color: COLORS.WHITE,
    category: CATEGORIES.SKIRT,
    price: 90,
    rating: 75,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "6",
    name: "Сандалии",
    description: "Комфортные и лёгкие",
    color: COLORS.BEIGE,
    category: CATEGORIES.FOOTWEAR,
    price: 80,
    rating: 65,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "7",
    name: "Блузка",
    description: "Легкая блузка для офиса",
    color: COLORS.RED,
    category: CATEGORIES.JACKET,
    price: 120,
    rating: 70,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "8",
    name: "Тапочки",
    description: "Мягкие тапочки для дома",
    color: COLORS.BLUE,
    category: CATEGORIES.FOOTWEAR,
    price: 50,
    rating: 85,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "9",
    name: "Сапоги",
    description: "Для зимы",
    color: COLORS.BLUE,
    category: CATEGORIES.FOOTWEAR,
    price: 300,
    rating: 92,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "10",
    name: "Пальто",
    description: "Стильное зимнее пальто",
    color: COLORS.BLACK,
    category: CATEGORIES.COAT,
    price: 400,
    rating: 88,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
]
