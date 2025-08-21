import { useContext } from "react";
import CartContext from "./CartContext";

function ShoppingCart() {
  const { cartItems } = useContext(CartContext);

  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">🛒 Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg">No items in cart</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item,index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg p-4 shadow-md bg-white"
            >
       
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-600 text-sm">Qty: {item.qty}</p>
                  <p className="text-gray-600 text-sm">₹ {item.price} each</p>
                </div>
              </div>


              <p className="text-xl font-bold text-green-600">
                ₹ {item.price * item.qty}
              </p>
            </div>
          ))}


          <div className="border-t pt-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Grand Total:</h2>
            <p className="text-2xl font-bold text-green-700">₹ {grandTotal}</p>
          </div>

          <div className="flex justify-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
