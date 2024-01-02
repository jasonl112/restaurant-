type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const specialroll: Products = [
  {
    id: 1,
    title: "Alaska Roll",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/img/sushi.jpg",
    price: 14.9,
    options: [
      {
        title: "Avocado",
        additionalPrice: 2,
      },
      {
        title: "Spicy Mayo",
        additionalPrice: 4,
      },
      {
        title: "Soy Wrap",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 1,
    title: "Dragon Roll",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/img/sushi.jpg",
    price: 14.9,
    options: [
      {
        title: "Avocado",
        additionalPrice: 2,
      },
      {
        title: "Spicy Mayo",
        additionalPrice: 4,
      },
      {
        title: "Soy Wrap",
        additionalPrice: 6,
      },
    ],
  },
  
];

export const singleProduct: Product = 
  {
    id: 1,
    title: "Alaska Roll",
    desc: "Top: asdasdasdas In: aoshdasdhusad",
    img: "/img/sushi.jpg",
    price: 14.90,
    options: [
      {
        title: "Avocado",
        additionalPrice: 2,
      },
      {
        title: "Spicy Mayo",
        additionalPrice: 4,
      },
      {
        title: "Soy Wrap",
        additionalPrice: 6,
      },
    ],
  };

type Menu = {
  id: number;
  slug: string;
  title: string;
  img?: string;
}[];

export const menu: Menu = [
  {
    id: 0,
    slug: "",
    title: "All Categories",
    img: "/img/sushi.jpg",
  },
  {
    id: 1,
    slug: "appetizer",
    title: "Appetizer",
    img: "/img/sushi.jpg",
  },
  {
    id: 2,
    slug: "sushi-appetizer",
    title: "Sushi-Appetizer",
    img: "/temporary/m1.png",
  },
  {
    id: 3,
    slug: "soup",
    title: "Soup",
    img: "/temporary/m1.png",
  },
  {
    id: 4,
    slug: "salad",
    title: "Salad",
    img: "/temporary/m1.png",
  },
  {
    id: 5,
    slug: "roll",
    title: "Roll",
    img: "/temporary/m1.png",
  },
  {
    id: 6,
    slug: "sushi-sashimi",
    title: "Sushi/Sashimi",
    img: "/temporary/m1.png",
  },
  {
    id: 7,
    slug: "special-roll",
    title: "Special Roll",
    img: "/temporary/m1.png",
  },

  
];