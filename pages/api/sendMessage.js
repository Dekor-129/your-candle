const adress = `https://api.telegram.org/bot5376669546:AAE0deUBmzw2rs0g2-bjNzsH0-IEmB4MRMA/sendMessage?chat_id=-783628550&text=`

export default async function handler(req, res) {
  const form = JSON.parse(req.body).form

  const formText = 
  `
    Имя: ${form.name};         
    Email: ${form.email};         
    Телефон: ${form.tel};             
    Комментарий: ${form.comment || 'Нет'};
  `

  await fetch(
    adress 
    + formText 
  )
  res.status(200).json({ work: true })
}