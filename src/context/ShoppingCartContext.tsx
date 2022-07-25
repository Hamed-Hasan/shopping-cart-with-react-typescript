import { createContext, ReactNode, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorege';

type ShoppingCartProviderProps  ={

    children: ReactNode
}

type CartItem ={
    id: number
    quantity: number
}

type ShoppingCartContext ={
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function ShoppingCartProvider( { children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
    )

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemCartQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }


}

