import { IProduct } from "../types/product.type"
import { Colors } from "./colors.enum"
import { Categories } from "./categories.enum"

export const mockProducts: IProduct[] = [
  {
    id: "1",
    name: "Кеды",
    description: "Выполнены из натуральной кожи",
    color: Colors.BLACK,
    category: Categories.FOOTWEAR,
    price: 350,
    rating: 90,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "2",
    name: "Платье",
    description: "Элегантное вечернее платье",
    color: Colors.BLUE,
    category: Categories.DRESS,
    price: 200,
    rating: 85,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "3",
    name: "Куртка",
    description: "Теплая куртка для осени",
    color: Colors.BROWN,
    category: Categories.JACKET,
    price: 150,
    rating: 80,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "4",
    name: "Кроссовки",
    description: "Для бега",
    color: Colors.RED,
    category: Categories.FOOTWEAR,
    price: 110,
    rating: 73,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "5",
    name: "Юбка",
    description: "Красивая юбка для лета",
    color: Colors.WHITE,
    category: Categories.SKIRT,
    price: 90,
    rating: 75,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "6",
    name: "Сандалии",
    description: "Комфортные и лёгкие",
    color: Colors.BEIGE,
    category: Categories.FOOTWEAR,
    price: 80,
    rating: 65,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "7",
    name: "Блузка",
    description: "Легкая блузка для офиса",
    color: Colors.RED,
    category: Categories.JACKET,
    price: 120,
    rating: 70,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "8",
    name: "Тапочки",
    description: "Мягкие тапочки для дома",
    color: Colors.BLUE,
    category: Categories.FOOTWEAR,
    price: 50,
    rating: 85,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "9",
    name: "Сапоги",
    description: "Для зимы",
    color: Colors.BLUE,
    category: Categories.FOOTWEAR,
    price: 300,
    rating: 92,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
  {
    id: "10",
    name: "Пальто",
    description: "Стильное зимнее пальто",
    color: Colors.BLACK,
    category: Categories.COAT,
    price: 400,
    rating: 88,
    imageUrl:
      "https://avatars.dzeninfra.ru/get-zen_doc/8269145/pub_641ec1d0798be415157b4180_641f3d1cd4b1f54fcf2f0a01/scale_1200",
  },
]