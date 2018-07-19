export function addToCart(id){
	return {
		type:'ADD',
		payload : {id:id, qty:1}
	}
}

export function updateQty(id, qty){
	return {
		type:'UPDATE_QTY',
		payload : {id:id, qty:qty}
	}	
}

export function removeFromCart(id){
	return {
		type:'REMOVE',
		payload : {id}
	}
}

export function emptyCart(){
	return {
		type:'EMPTY'
	}
}