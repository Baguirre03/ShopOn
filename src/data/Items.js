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

  const browseBy = [
    {
      name: "Dresses",
      img: dresses,
      items: [
        {
          name: "Dress one",
          price: "38.99",
          img: item,
          colors: ["brown", "grey"],
        },
        { name: "Dress two", price: "59", img: item1 },
        {
          name: "Dress three",
          price: "49.99",
          img: item2,
          colors: ["silver", "grey", "black"],
        },
        { name: "Dress four", price: "49.99", img: item7},
        {
          name: "Dress five",
          price: "45.99",
          img: item5,
          colors: ["grey", "black"],
        },
        { name: "Dress size", price: "49.99", img: item6 },
      ],
    },
    {
      name: "Tops",
      img: tops,
      items: [
        { name: "Ruched Top", price: "49.99", img: item },
        { name: "Slim Button Down", price: "41.99", img: item1 },
        { name: "Peggy Top", price: "69.99", img: item2 },
        { name: "Different Top", price: "23", img: item5 },
        { name: "Slim Button Top", price: "40", img: item6},
        { name: "New Top", price: "21", img: item7},
      ],
    },
    {
      name: "Sweaters + Cardigans",
      img: sweater,
      items: [
        { name: "Sweater one", price: "49.99", img: item7},
        { name: "Sweater two", price: "30.99", img: item6},
        { name: "Sweater three", price: "67.99", img: item5 },
        { name: "Sweater four", price: "25", img: item1 },
        { name: "Sweater five", price: "49", img: item2 },
        { name: "Sweater six", price: "39", img: item },
      ],
    },
    {
      name: "Coats + Jackets",
      img: jacket,
      items: [
        { name: "Coat one", price: "38.99", img: item2 },
        { name: "Coat two", price: "49", img: item1 },
        { name: "Coat three", price: "59", img: item },
        { name: "Coat four", price: "40.99", img: item7 },
        { name: "Coat five", price: "60", img: item5 },
        { name: "Coat six", price: "69.99", img: item6 },
      ],
    },
    {
      name: "Bottoms",
      img: pants,
      items: [
        { name: "Bottom one", price: "30.99", img: item6 },
        { name: "Bottom one", price: "59.99", img: item5 },
        { name: "Bottom two", price: "22.99", img: item7 },
        { name: "Bottom three", price: "39", img: item1 },
        { name: "Bottom four", price: "49.99", img: item },
        { name: "Bottom five", price: "49.99", img: item2 },
      ],
    },
    {
      name: "Activewear",
      img: athletic,
      items: [
        { name: "Active one", price: "49.99", img: item1 },
        { name: "Active two", price: "49.99", img: item7 },
        { name: "Active three", price: "49.99", img: item2 },
        { name: "Active four", price: "49.99", img: item6 },
        { name: "Active five", price: "49.99", img: item },
        { name: "Active six", price: "49.99", img: item5 },
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