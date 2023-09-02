import { cartActions } from "./cart-slice"
import { uiActions } from "./ui-slice"

export const fetchData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch('https://redux-request-93325-default-rtdb.firebaseio.com/cartItems.json')
            const data = await res.json()
            return data
          }
          
          try{
            const cartData = await fetchHandler()
            dispatch(cartActions.replaceData(cartData))
        } catch(err) {
            dispatch(uiActions.showNotification({
                message:'Error',
                open: true,
                type: 'error',
              }))
        }
    }
}


export const sendCartData = (cart) => {
    return async(dispatch) => {
      dispatch(uiActions.showNotification({
        message:'Sending Request',
        open: true,
        type: 'warning',
      })) 

      // Send state as Sending request
      const sendRequest = async () => {
        const rest = await fetch('https://redux-request-93325-default-rtdb.firebaseio.com/cartItems.json', {
          method: 'PUT',
          body: JSON.stringify(cart)
        })
  
        const data = await rest.json()
  
        dispatch(uiActions.showNotification({
          message:'Send Request To Database Successfully',
          open: true,
          type: 'success',
        }))     
      }
      
      try {
          await sendRequest() 
      } catch (err) {
        dispatch(uiActions.showNotification({
            message:'Error',
            open: true,
            type: 'error',
          }))
      }
    }
  }