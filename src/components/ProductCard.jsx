import React from 'react';


function ProductCard({ product,addToCart }) {
    
    return (
        <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />

            {/* Product Details */}
            <div className="p-2 border-t">
                <h3 className="text-sm font-semibold text-gray-700 truncate">{product.title}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-gray-800">${product.price}</span>
                    <button className="flex items-center gap-2 px-3 py-2  text-black font-medium rounded-md hover:bg-white bg-gray-300  transition duration-300"
                    onClick={() => addToCart(product)}>
                    <span className="md:hidden ">+</span>
                    <img src="/icons/cart.png" alt="Cart" className="h-5 w-5" />
                    <span className="hidden md:block text-sm">Add to Cart</span>
                    
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
