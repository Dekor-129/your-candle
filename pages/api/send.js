// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const adress = `https://api.telegram.org/bot5376669546:AAE0deUBmzw2rs0g2-bjNzsH0-IEmB4MRMA/sendMessage?chat_id=-783628550&text=`

export default async function handler(req, res) {
  const form = JSON.parse(req.body).form
  const cartItems = JSON.parse(req.body).cartItems

  const formText = 
  `
    Имя: ${form.name};         
    Email: ${form.email};         
    Телефон: ${form.tel};             
    Комментарий: ${form.comment || 'Нет'};
  `

  let sortedCart = []

  cartItems.forEach(element => {
    const elemInSortedCart = sortedCart.filter((el)=> (
      el.id === element.id
      && el.parameter.color.colorName === element.parameter.color.colorName
      && el.parameter.coloring.coloring === element.parameter.coloring.coloring
      && el.parameter.scented === element.parameter.scented
    ))
    const elemInCartItems = cartItems.filter((el)=> (
      el.id === element.id
      && el.parameter.color.colorName === element.parameter.color.colorName
      && el.parameter.coloring.coloring === element.parameter.coloring.coloring
      && el.parameter.scented === element.parameter.scented
    ))
    sortedCart = elemInSortedCart.length > 0
    ? [...sortedCart]
    : [...sortedCart, {...element, quantity: elemInCartItems.length}]
    
  })

  const cartItemsText = sortedCart.map((el, index)=>(
    `
    ${index + 1} Заказ;
    Название: ${el.name}; 
    Цвет: ${el.parameter.color.colorName}; 
    Окрашивание: ${el.parameter.coloring.coloring ? 'Да' : 'Нет'};  
    Ароматизатор: ${el.parameter.scented ? 'Да' : 'Нет'}; 
    Цена за штуку: ${el.currentPrice}; 
    Количество: ${el.quantity}; 
     ` 
  )).join('---------------------------------')



  await fetch(
    adress 
    + formText 
    + cartItemsText
  )
  res.status(200).json({ work: true })
}
