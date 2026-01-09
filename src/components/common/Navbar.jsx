// import { Link } from "react-router-dom";
// import useCart from "../../hooks/useCart";

// const Navbar = () => {
//   const { cartItems } = useCart();

//   const cartCount = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-sm">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="/assets/images/logo.png"
//             alt="Ayurveda Store"
//             className="h-10"
//           />
//           <span className="text-xl font-bold text-green-700">
//             Ayurveda
//           </span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-8 text-gray-700">
//           <Link to="/" className="hover:text-green-700">
//             Home
//           </Link>
//           <Link to="/shop" className="hover:text-green-700">
//             Shop
//           </Link>
//           <Link to="/about" className="hover:text-green-700">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-green-700">
//             Contact
//           </Link>
//         </nav>

//         <Link
//           to="/cart"
//           className="relative text-gray-700 hover:text-green-700"
//         >
//           🛒
//           {cartCount > 0 && (
//             <span className="absolute -top-2 -right-3 bg-green-700 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//               {cartCount}
//             </span>
//           )}
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
