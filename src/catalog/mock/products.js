const products = [
  {
    img: "https://t-static.dafiti.com.br/q-Uca3sBPNnqQ5BSf_zTHXZGQxM=/fit-in/333x483/static.dafiti.com.br/p/colcci-camiseta-colcci-generation-preta-0942-7951507-1-product.jpg",
    name: "Camiseta Colcci Generation Preta",
    price: 64.99
  },
  {
    img: "https://t-static.dafiti.com.br/eTWJOKLR9s0fr3keZkQfJjSFr5M=/fit-in/333x483/static.dafiti.com.br/p/colcci-camiseta-colcci-lettering-off-white-0110-7151507-1-product.jpg",
    name: "Camiseta Colcci Lettering Off-White",
    price: 74.99
  },
  {
    img: "https://t-static.dafiti.com.br/gYwJeXs1D3UctI5HFFJsfsj9Qy8=/fit-in/333x483/static.dafiti.com.br/p/colcci-camiseta-colcci-lettering-azul-marinho-9896-9351507-1-product.jpg",
    name: "Camiseta Colcci Lettering Azul-Marinho",
    price: 64.99
  },
  {
    img: "https://t-static.dafiti.com.br/ITtNreR8OZpguhYwxeIQVjPJnxc=/fit-in/333x483/static.dafiti.com.br/p/lan%25c3%25a7a-perfume-camiseta-lan%25c3%25a7a-perfume-cora%25c3%25a7%25c3%25a3o-branca-4833-5934547-1-product.jpg",
    name: "Camiseta Lança Perfume Coração Branca",
    price: 74.99
  },
  {
    img: "https://t-static.dafiti.com.br/vaIvBIjTOcnvJjbtSuZ1xQ_LPHI=/fit-in/333x483/static.dafiti.com.br/p/lez-a-lez-blusa-lez-a-lez-leaves-bege%252fverde-7083-9559425-1-product.jpg",
    name: "Blusa Lez a Lez Leaves Bege/Verde",
    price: 84.99
  },
  {
    img: "https://t-static.dafiti.com.br/uskI4FfXAu3mlUPZjnBDU1F1A6Y=/fit-in/333x483/static.dafiti.com.br/p/lez-a-lez-body-lez-a-lez-melrose-rosa-7734-1053107-1-product.jpg",
    name: "Body Lez a Lez Melrose Rosa",
    price: 74.99
  },
  {
    img: "https://t-static.dafiti.com.br/XVs4B0i-pFiYyJ8cNKu53a6f2pc=/fit-in/333x483/static.dafiti.com.br/p/fiveblu-camiseta-fiveblu-nasa-branca-0911-9793766-1-product.jpg",
    name: "Camiseta FiveBlu Nasa Branca",
    price: 29.99
  },
  {
    img: "https://t-static.dafiti.com.br/pM9ypVcS231Nvz2J552upWzx4Vc=/fit-in/333x483/static.dafiti.com.br/p/forum-regata-forum-ombro-%25c3%259anico-preta-8916-1792676-1-product.jpg",
    name: "Regata Forum Ombro Único Preta",
    price: 69.99
  },
  {
    img: "https://t-static.dafiti.com.br/tL6LKKS9vvzhUgGk_rRZNdYXZ9Q=/fit-in/333x483/static.dafiti.com.br/p/colcci-blusa-colcci-ombro-a-ombro-folhagem-preta%252fverde-2607-1022507-1-product.jpg",
    name: "Blusa AMBER Babados Laranja",
    price: 39.99
  },
  {
    img: "https://t-static.dafiti.com.br/PppNvLkuW-_GZ5FkahbU53PfmgY=/fit-in/333x483/static.dafiti.com.br/p/amber-blusa-amber-babados-laranja-2915-9840356-1-product.jpg",
    name: "Blusa Colcci Ombro a Ombro Folhagem Preta/Verde",
    price: 94.99
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4W04BpXdct-D-dJ9jHXm3CfGKtW6Qq2w5RLBeT5hBsLCSnJ9j4v6Zh1_7sN2-b_7bqPSAozqw&usqp=CAc",
    name: "Camiseta Pequeno Poru - GG",
    price: 87.92
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSR3-FpzHVy1vD_hx-9S-Mp901GPJr1cjnOiTaK5IATiIjRgIIKORFtvzjgA-eF67QWMb6_r4&usqp=CAc",
    name: "Camiseta Didididiê Branca",
    price: 79.90
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNGP6ek2o4ULOPdmXwUI66DjzoInBPlwv79H6Ea3ZI5xzT8iHXJalx_fH8eHWFY5JS4EcVKoQx&usqp=CAc",
    name: "Camiseta Amor Significado - Branca",
    price: 49.90
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjiweKhbuFhY7MAZAXqImobOSkT9bYGzg1ua_9h9pnMMgjnpHJ4FERZ3foDpN2SxowEz8zLsT6Vg&usqp=CAc",
    name: "Camiseta Offline - Preto - Preto",
    price: 33.90
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQJBTnkxvlNSaomAv9M6Sk2P4vr6MoAfZnrijSfzbtPBlIILpiQ3nNUJ1T8AuhPD7RPIhrjAZ0&usqp=CAE",
    name: "Camiseta Einstein",
    price: 99.00
  },
  {
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ0xSdc_Nk7GZRgXSdspRdH34KVY6z9nnHLcxdweJCbwb9Yb2rJ79dVQlxDCA&usqp=CAE",
    name: "Caixa para Camiseta Camisa 27x27x04",
    price: 125.00
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTvXfVnSgt-LUmt53voddwE0Ef6EBo-XMws9BbHZgaYmc79f_833mtJ_EHpd8I&usqp=CAE",
    name: "Carta ocasional Camiseta,S",
    price: 61.99
  },
  {
    img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRdskOkbY1RB4iVOQMyp-MfLsrtgmYxDdWIcVzOAAy2jwnkN8YTWqwZusisqQILogXkKGhfSNbH&usqp=CAE",
    name: "Segunda pele brilho-preto-m",
    price: 79.50,
    discount: 60.50
  },
  {
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRpdXs0tbdmPth5I43c6npAOMbnD96ugnUZQjwRkLvaWZUDvpE5um_7oSrdKaYGIIrViRmG0_o&usqp=CAE",
    name: "Camiseta Unissex 'Written and Directed by Quentin Tarantino': Quentin Tarantino",
    price: 69.90
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRW3-x8WxtdTDQiJ3WNxLblSGrt0ReA0-3D9Z-nPx2ovTkhuDS59cIIHrsS59pXZ4VPBTC0f_8&usqp=CAE",
    name: "Camiseta Extended - Verde - G",
    price: 99.90
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTeveyZI4e-AJTjfMNr7pRMW-BQlmLi6TxhrAYauPluGUIt_bfqS3Ncqhb13g&usqp=CAE",
    name: "Tênis New Confort Fashion - Frete Gratis, Cinza / 40",
    price: 164.90
  },
  {
    img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSRTTTESlPMoeA3TMGgF1nz0bA0ZXn9gAiLsfgXBk-y7O8sxDoxBlxMkEHeoQ&usqp=CAE",
    name: "Tênis De Corrida casuais Para Homens Tênis ...",
    price: 59.90
  }
]

export default products