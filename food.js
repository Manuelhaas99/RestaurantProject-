const comidas = {
  cocina_fria: [
    {
      id: 1,
      platillo: 'cocteles',
      descripcion:
        'Deliciosa combinacion de mariscos frescos con jugo de salsas y variedad de verduras',
      precio: 80,
    },
    {
      id: 2,
      platillo: 'Tostada de ceviche de pescado',
      descripcion:
        'Cubos de carne de filete de pescado curtidos con limon mas pepino, cebolla y cilantro. Montado sobre una tortilla de maiz amarilla, una tostada sumamente fresca',
      precio: 50,
    },
    {
      id: 3,
      platillo: 'Camaron a la michelada',
      descripcion:
        'Perfecta combinacion de camarones, jugo de michelada , vegetales frescos y papas pringles.',
      precio: 160,
    },
    {
      id: 4,
      platillo: 'Molcajete de mariscos',
      descripcion:
        'Combinacion entre explosiones de sabores y frescuras, mezcla de camaron, calamar, ostion, jaiba, pepino, cebolla y aguacate.',
      precio: 185,
    },
  ],
  cocina_caliente: [
    {
      id: 5,
      platillo: 'Sopa de mariscos',
      descripcion:
        'Sopa tradicional para curtar cualquier mal.Bomba de proteinas que consta de camarones, calamar, jaiba, ostion, caracol.',
      precio: 165,
    },
    {
      id: 6,
      platillo: 'Mojarra al mojo',
      descripcion: 'Mojarra frita con ajo acompañada de verduras frescas',
      precio: 150,
    },
    {
      id: 7,
      platillo: 'Piña rellena',
      descripcion:
        'Piña asada rellena con un mix de mariscos gratinados con queso manchego',
      precio: 185,
    },
  ],
  parrilla: [
    {
      id: 8,
      platillo: 'Pescado zarandeado',
      descripcion:
        'Asados a la bras, lisas, robalo, huachinango, mero, etc. (Precio segun temporada)',
      precio: 200,
    },
    {
      id: 9,
      platillo: 'Pulpo a la brasa',
      descripcion:
        'Servido sobre salsa agridulce de tamarindo, compañado de piña, caramelizada y ensalada americana. (Precio segun su temporada) ',
      precio: 210,
    },
  ],
  Bebidas: [
    {
      id: 10,
      platillo: 'Chiquiada de mariscos',
      descripcion: 'XX LAGUER, TECATE LIGHT, ULTRA',
      precio: 55,
    },
    {
      id: 11,
      platillo: 'Cervezas',
      descripcion: 'XX LAGUER, TECATE LIGHT, ULTRA',
      precio: 30,
    },
    {
      id: 12,
      platillo: 'Michelada',
      descripcion:
        'Michelada con la cerveza de su preferencia (Consulte con su mesero)',
      precio: 70,
    },
  ],
};

export const foodTypes = [
  {
    id: 'cocina_fria',
    titulo: 'Cocina fria',
    imagen: require('./assets/tostada.jpeg'),
  },
  {
    id: 'cocina_caliente',
    titulo: 'Cocina caliente',
    imagen: require('./assets/caliente.jpeg'),
  },
  {
    id: 'parrilla',
    titulo: 'Parrilla',
    imagen: require('./assets/parrilla.jpeg'),
  },
  { id: 'Bebidas', titulo: 'Bebidas', imagen: require('./assets/bebidas.jpeg') },
];

export default comidas;
