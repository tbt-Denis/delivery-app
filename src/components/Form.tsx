import { useShoppingCart } from '../context/DeliveryAppContext'
import './Form.scss'

export const Form = () => {

  const {
    shop,
    selectedProducts
  } = useShoppingCart()


  const handleOnSubmit = (e: any) => {
    e.preventDefault()
    // Get form data
    const data = Object.fromEntries(Array.from(e.target).map((x: any) => ([x.id, x.value])))
    // Remove null properties
    const filtered = Object.fromEntries(Object.entries(data).filter(([key]) => key !== ''));


    // Get products
    const needeed = data.find((item: any) => item.id === shop)?.menu
    const final = needeed?.map((product: { id: number }, index: any) => {
      const searching = selectedProducts.find((item) => item.id === product.id)?.quantity
      if (searching) {
        return { ...product, quantity: searching }
      }
    })

    for (const key in final) {
      if (final[+key] === undefined) {
        delete final[+key]
      }
    }


    console.log(selectedProducts)

  }

  return (
    <>
      <form onSubmit={handleOnSubmit} id='Form' className='form'>
        <div className='form__item'>
          <label className='label' htmlFor="name">Name:</label>
          <input className='input'
            // required 
            type="text" id='name' />
        </div>
        <div className='form__item'>
          <label className='label' htmlFor="email">Email:</label>
          <input className='input'
            // required 
            type="email" id='email' />
        </div>
        <div className='form__item'>
          <label className='label' htmlFor="tel">Phone:</label>
          <input className='input'
            // required 
            type="tel" id='tel' />
        </div>
        <div className='form__item'>
          <label className='label' htmlFor="address">Address:</label>
          <input className='input'
            // required 
            type="text" id='address' />
        </div>
      </form>
    </>
  )
}
