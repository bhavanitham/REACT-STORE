import React from 'react'

function Cart({cart,removeFromCart}) {
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
  return (
    
    <div>
      <div className="min-h-screen bg-gray-100 py-10">
  <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
       {/* Page Title */}
    <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Cart Items */}
    <div className="space-y-6">

      {/* Single Cart Item */}

      <div>
  {cart.map((product) => (
    <div key={product.id} className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-20 rounded-lg"
        />
        <div>
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-500">Quantity: {product.quantity || 1}</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => removeFromCart(product)}
        >
          Remove
        </button>
      </div>
    </div>
  ))}
</div>

      {/* End of Single Cart Item */}

      {/* Repeat items as needed */}
    </div>

      {/* Cart Summary */}
    <div className="mt-8">
      <div className="flex justify-between text-lg font-medium">
        <p>Subtotal:</p>
        <p>{totalPrice}</p>
      </div>
      <div className="flex justify-between text-lg font-medium">
        <p>Tax:</p>
        <p>No tax for you</p>
      </div>
      <div className="flex justify-between text-xl font-bold mt-4">
        <p>Total:</p>
        <p>{totalPrice}</p>
        
      </div>
    </div>

    {/* Checkout Button */}
    <div className="mt-6 flex flex-row-reverse gap-7">
      <button
        className="bg-blue-600 text-white  py-1 px-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Proceed to Checkout
      </button>
      <button className="bg-gray-600 text-white  py-1 px-2 rounded-lg shadow hover:bg-gray-700 transition">
        Home
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cart
