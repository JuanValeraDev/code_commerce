import {useState} from "react";
import {CartItem, Product} from "../types.ts";


export function useCartItems() {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    const updateQuantity = (id: number, quantity: number) => {
        setCartItems(items =>
            quantity === 0
                ? items.filter(item => item.id !== id)
                : items.map(item =>
                    item.id === id ? {...item, quantity} : item
                )
        );
    };

    const removeItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


    const addToCart = (product: Product) => {
        setCartItems(items => {
            const existingItem = items.find(item => item.id === product.id);
            if (existingItem) {
                return items.map(item =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity + 1}
                        : item
                );
            }
            return [...items, {...product, quantity: 1}];
        });
    };

    return {cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeItem, totalItems, addToCart}
}
