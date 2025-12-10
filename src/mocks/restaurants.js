const restaurants = [
  {
    id: 1,
    name: 'La Dolce Vita Trattoria',
    description: 'Massas artesanais, molhos frescos e o melhor da culinária italiana.',
    image:
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlight: true,
    dishes: [
      {
        id: 101,
        name: 'Spaghetti alla Carbonara',
        description: 'Spaghetti, ovos, queijo pecorino, pancetta e pimenta-do-reino.',
        price: 42.9,
        image:
          'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 102,
        name: 'Lasagna alla Bolognese',
        description: 'Massa fresca, molho bolonhesa, queijo gratinado.',
        price: 49.9,
        image:
          'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  },
  {
    id: 2,
    name: 'Sushi House',
    description: 'Combos variados, peixes frescos e experiência japonesa completa.',
    image:
      'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlight: false,
    dishes: [
      {
        id: 201,
        name: 'Combo Sushi 20 peças',
        description: 'Sushis variados com salmão, atum e peixe branco.',
        price: 59.9,
        image:
          'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
  }
]

export default restaurants
