const SHOE_DATA = [
  {
    id: 1,
    name: 'Adidas',
    imageUrl: 'https://i.ibb.co/T4QkJGR/129154579-709573116339577-170522045615251621-n-1.jpg',
    price: 30
  },
  {
    id: 2,
    name: 'Crocs',
    imageUrl: 'https://i.ibb.co/LPkHDdR/129866998-169536568237304-4113990321763345011-n.jpg',
    price: 49,
    "sale": "Sale"
  },
  {
    id: 3,
    name: 'Stride Ride',
    imageUrl: 'https://i.ibb.co/d4Rjpxd/129988419-848487669026791-7860488758172182720-n.jpg',
    price: 30
  },
  {
    id: 4,
    name: 'Munich',
    imageUrl: 'https://i.ibb.co/42Y0Nx8/144844663-708393996503649-2743838693452595746-n.jpg',
    price: 55
  },
  {
    id: 5,
    name: 'Minnetonka',
    imageUrl: 'https://i.ibb.co/CzP1whn/145078791-748159429456040-2173678167437111163-n.jpg',
    price: 30,
    "sale": "Sale"
  },
  {
    id: 6,
    name: 'Merrell',
    imageUrl: 'https://i.ibb.co/ZGz77Ms/145090258-4240529132628317-1739997069509888691-n.jpg',
    price: 60
  },
  {
    id: 7,
    name: 'Italian Shoe Makers',
    imageUrl: 'https://i.ibb.co/6WQfBz2/145115668-167672618202519-6488356612612937848-n-1.jpg',
    price: 24,
    "sale": "Sale"
  },
  {
    id: 8,
    name: 'Harly DevidSon',
    imageUrl: 'https://i.ibb.co/PtKsmJP/145631974-702178610453126-2712283403837637599-n-1.jpg',
    price: 67,
    "sale": "Sale"
  },
  {
    id: 9,
    name: 'Etnies',
    imageUrl: 'https://i.ibb.co/Sm2h3JV/145633901-247371013514750-644630173515779833-n.jpg',
    price: 62
  },
  {
    id: 10,
    name: 'Harly DevidSon',
    imageUrl: 'https://i.ibb.co/XjPvgjg/145640213-1451331621925241-7325022439154908324-n-1.jpg',
    price: 25,
    "sale": "Sale"
  },
  {
    id: 11,
    name: 'JB Goodhue',
    imageUrl: 'https://i.ibb.co/DYp036q/145651889-323002522482319-5453126123941806184-n.jpg',
    price: 54,
    "sale": "Sale"
  },
  {
    id: 12,
    name: 'Merrell',
    imageUrl: 'https://i.ibb.co/PQMjdCF/145811311-448692846327093-6170610182937274237-n.jpg',
    price: 34
  },
  {
    id: 13,
    name: 'Lasonia',
    imageUrl: 'https://i.ibb.co/g4Ykm8X/145846987-1636556643398834-8401573690449213647-n.jpg',
    price: 20
  },
  {
    id: 14,
    name: 'Soral',
    imageUrl: 'https://i.ibb.co/G3cj93C/145850302-2872010249755219-4676551682857736218-n-1.jpg',
    price: 45,
    "sale": "Sale"
  },
  {
    id: 15,
    name: 'Stride Rite',
    imageUrl: 'https://i.ibb.co/M75zf6Y/146040392-423129702341525-2029142491165597004-n.jpg',
    price: 22
  },
  {
    id: 16,
    name: 'Wolverine',
    imageUrl: 'https://i.ibb.co/qBxGnSy/146155920-897778560957964-871009707649190453-n.jpg',
    price: 40,
    "sale": "Sale"
  },
  {
    id: 17,
    name: 'Totes',
    imageUrl: 'https://i.ibb.co/ysXXNWL/147527612-165603121993833-9169559271879444588-n.jpg',
    price: 84
  },
  {
    id: 18,
    name: 'Aerosoles',
    imageUrl: 'https://i.ibb.co/3hy5fhS/147684704-777832956152801-5063472025124062260-n.jpg',
    price: 46
  },
  {
    id: 19,
    name: 'Osiris Shoes',
    imageUrl: 'https://i.ibb.co/fnvB8hp/Layer-26.jpg',
    price: 30
  },
  {
    id: 20,
    name: 'Wildsmith',
    imageUrl: 'https://i.ibb.co/LthSP5t/product-1.jpg',
    price: 32,
    "sale": "Sale"
  },
  {
    id: 21,
    name: 'Totes',
    imageUrl: 'https://i.ibb.co/xhS22cH/product-5-1525fd60-44a7-4300-8c09-7869ff6eb274.jpg',
    price: 84
  },
  {
    id: 22,
    name: 'Aerosoles',
    imageUrl: 'https://i.ibb.co/2KknK81/product-6.jpg',
    price: 46,
    "sale": "Sale"
  },
  {
    id: 23,
    name: 'Osiris Shoes',
    imageUrl: 'https://i.ibb.co/8BCJsp9/product-8.jpg',
    price: 30
  },
  {
    id: 24,
    name: 'Wildsmith',
    imageUrl: 'https://i.ibb.co/cbbtLd0/product-v1-img3.jpg',
    price: 32,
    "sale": "Sale"
  },
  {
    id: 25,
    name: 'Totes',
    imageUrl: 'https://i.ibb.co/F0T9Vvh/product-v1-img11.jpg',
    price: 84
  },
  {
    id: 26,
    name: 'Aerosoles',
    imageUrl: 'https://i.ibb.co/hXk0Yws/shoe19-grande.jpg',
    price: 46,
    "sale": "Sale"
  },
  {
    id: 27,
    name: 'Osiris Shoes',
    imageUrl: 'https://i.ibb.co/K6km66w/shoe20-grande.jpg',
    price: 30
  },
  {
    id: 28,
    name: 'Wildsmith',
    imageUrl: 'https://i.ibb.co/THvWm4d/vna4u3b2nc-grn-vna4u3b2nc-grn-01-326336-1.jpg',
    price: 32
  }
]

export default SHOE_DATA;

