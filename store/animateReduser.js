
const defaultStore = {
    rotate: 0,
    showAlert: false,
    alertVariants: {
        visible: { 
            opacity: 1,
            y: '-115px',
            },
        hidden: { 
            opacity: 0,
            y: '-150px'
        },
        exit: { 
            opacity: 0,
        },
    }
}

export const animateReduser = (state = defaultStore, action) =>{
  switch(action.type) {
    case 'ROTATE_PLUS':
        return {...state, rotate: state.rotate + action.payload}
    case 'ROTATE_MINUS':
        return {...state, rotate: state.rotate - action.payload}
    case 'SHOW_ALERT':
        return {...state, showAlert: action.payload}
        
    default: 
        return state
  }
}

export const rotatePlus = (payload) =>({
    type: 'ROTATE_PLUS',
    payload
})

export const rotateMinus = (payload) =>({
    type: 'ROTATE_MINUS',
    payload
})

export const showAlert = (payload) =>({
    type: 'SHOW_ALERT',
    payload
})
