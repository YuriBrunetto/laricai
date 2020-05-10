export const handleCategoryEmoji = category => {
  switch (category) {
    case 'beer':
      return '🍺'
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'vegetarian':
      return '🥗'
    case 'hot-dog':
      return '🌭'
    case 'pancho':
      return '🌭'
    default:
      return null
  }
}
