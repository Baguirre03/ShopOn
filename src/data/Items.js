import item from "../assets/item.png";
import item1 from "../assets/item1.png";
import item2 from '../assets/item2.png'
import item6 from '../assets/item6.png'
import item5 from '../assets/item5.png'
import item7 from '../assets/item7.png'
import dresses from '../assets/dresses.png'
import tops from '../assets/tops.png'
import sweater from '../assets/sweater.png'
import pants from '../assets/pants.png'
import athletic from '../assets/athletic.png'
import jacket from '../assets/jacket.png'




const defaultItems = [
    {
      name: "Ruched Top",
      price: "38.99",
      img: item,
      colors: ["brown", "grey"],
    },
    { name: "Slim Button Down", price: "59", img: item5 },
    {
      name: "Peggy Top",
      price: "49.99",
      img: item1,
      colors: ["silver", "grey", "black"],
    },
    { name: "Ruched Top", price: "49.99", img: item2 },
    {
      name: "Slim Button Down",
      price: "45.99",
      img: "",
      colors: ["grey", "black"],
    },
    { name: "Peggy Top", price: "49.99", img: "" },
  ];
  const browseBy = [
    {
      name: "Dresses",
      img: dresses,
      items: [
        {
          name: "Ruched Top",
          price: "38.99",
          img: item,
          colors: ["brown", "grey"],
        },
        { name: "Slim Button Down", price: "59", img: item1 },
        {
          name: "Peggy Top",
          price: "49.99",
          img: item2,
          colors: ["silver", "grey", "black"],
        },
        { name: "Ruched Top", price: "49.99", img: item },
        {
          name: "Slim Button Down",
          price: "45.99",
          img: item1,
          colors: ["grey", "black"],
        },
        { name: "Peggy Top", price: "49.99", img: item2 },
      ],
    },
    {
      name: "Tops",
      img: tops,
      items: [
        { name: "Ruched Top", price: "49.99", img: "" },
        { name: "Slim Button Down", price: "41.99", img: "" },
        { name: "Peggy Top", price: "69.99", img: "" },
        { name: "Ruched Top", price: "23", img: "" },
        { name: "Slim Button Down", price: "40", img: "" },
        { name: "Peggy Top", price: "21", img: "" },
      ],
    },
    {
      name: "Sweaters + Cardigans",
      img: sweater,
      items: [
        { name: "Ruched Top", price: "49.99", img: "" },
        { name: "Slim Button Down", price: "30.99", img: "" },
        { name: "Peggy Top", price: "67.99", img: "" },
        { name: "Ruched Top", price: "25", img: "" },
        { name: "Slim Button Down", price: "49", img: "" },
        { name: "Peggy Top", price: "39", img: "" },
      ],
    },
    {
      name: "Coats + Jackets",
      img: jacket,
      items: [
        { name: "Ruched Top", price: "38.99", img: "" },
        { name: "Slim Button Down", price: "49", img: "" },
        { name: "Peggy Top", price: "59", img: "" },
        { name: "Ruched Top", price: "40.99", img: "" },
        { name: "Slim Button Down", price: "60", img: "" },
        { name: "Peggy Top", price: "69.99", img: "" },
      ],
    },
    {
      name: "Bottoms",
      img: pants,
      items: [
        { name: "Ruched Top", price: "30.99", img: "" },
        { name: "Slim Button Down", price: "59.99", img: "" },
        { name: "Peggy Top", price: "22.99", img: "" },
        { name: "Ruched Top", price: "39", img: "" },
        { name: "Slim Button Down", price: "49.99", img: "" },
        { name: "Peggy Top", price: "49.99", img: "" },
      ],
    },
    {
      name: "Activewear",
      img: athletic,
      items: [
        { name: "Ruched Top", price: "49.99", img: "" },
        { name: "Slim Button Down", price: "49.99", img: "" },
        { name: "Peggy Top", price: "49.99", img: "" },
        { name: "Ruched Top", price: "49.99", img: "" },
        { name: "Slim Button Down", price: "49.99", img: "" },
        { name: "Peggy Top", price: "49.99", img: "" },
      ],
    },
    // {
    //   name: "Intimates + Lounge",
    //   img: "",
    //   items: defaultItems,
    // },
    // {
    //   name: "Swim",
    //   img: "",
    //   items: defaultItems,
    // },
    // {
    //   name: "Shoes",
    //   img: "",
    //   items: defaultItems,
    // },
    // {
    //   name: "Accessories",
    //   img: "",
    //   items: defaultItems,
    // },
    // {
    //   name: "Sales",
    //   img: "",
    //   items: defaultItems,
    // },
  ];

  export default browseBy