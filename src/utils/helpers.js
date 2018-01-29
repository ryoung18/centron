export const BASE_URL = 'http://localhost:3001';

export const setStateOnTimeOut = (context, newState, time = 1000) => {
  setTimeout(() => {
    _setState(context, newState);
  }, time);
};

export const _setState = (context, newState) => {
  context.setState(prevState => ({ ...prevState, ...newState }));
};

//will remove after implementing redux
export const ajaxRequest = {
  categories: ['Clavicle', 'Hand Brace', 'Sleeping Hand Brace', 'Ankle', 'Foot', 'Lumbar'],
  products: [
  {
    id: 1,
    type: "Hand Brace",
    partNumber: "hik1021",
    title: "Hand Brace Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  },
  {
    id: 2,
    type: "Clavicle",
    partNumber: "hik1023",
    title: "Clavicle Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  },
  {
    id: 3,
    type: "Sleeping Hand Brace",
    partNumber: "hik1024",
    title: "Sleeping Hand Brace Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  },
  {
    id: 4,
    type: "Clavicle",
    partNumber: "hik1025",
    title: "Clavicle Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  },
  {
    id: 5,
    type: "Clavicle",
    partNumber: "hik1026",
    title: "Clavicle Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  },
  {
    id: 6,
    type: "Clavicle",
    partNumber: "hik1027",
    title: "Clavicle Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  },
  {
    id: 7,
    type: "Clavicle",
    partNumber: "hik1022",
    title: "Clavicle Strap Shoulder Support Brace",
    ebayPrice: [12, 19],
    ebayUrl: "http://ebay.com",
    amazonPrice: [15, 20],
    amazonUrl: "http://amazon.com",
    img: "https://i.ebayimg.com/images/g/hnwAAOSw~oFXI~Yj/s-l1600.jpg"
  }
]}
