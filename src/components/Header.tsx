import {ThemeToggle} from "./ThemeToggle.tsx";
import {ShoppingCart as CartIcon} from "lucide-react";
import {Cart} from "./Cart.tsx";
import {useCartItems} from "../hooks/useCartItems.ts";
import {useNavigate} from 'react-router-dom';


const Header = () => {

    const {cartItems, isCartOpen, setIsCartOpen, totalItems, updateQuantity, removeItem} = useCartItems()
    const navigate = useNavigate();

    return <>
        <header className="bg-white dark:bg-zinc-800 shadow-sm transition-colors fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
                        onClick={() => navigate("/")}>
                        <img
                            src="/src/assets/logo-dark-smallY.png"                   alt={"logo"}
                            className="max-w-36" style={{objectFit: "contain"}}
                        />
                    </h1>
                    <div className="flex items-center gap-4">
                        <ThemeToggle/>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                            <CartIcon size={24}/>
                            {totalItems > 0 && (
                                <span
                                    className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <Cart
            items={cartItems}
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeItem}
        />
    </>
}
Header.displayName = "Header"
export default Header
