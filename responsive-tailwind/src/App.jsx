// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
          
//           <div className="text-xl font-bold">
//             Logo
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <a href="#">Home</a>
//             <a href="#">About</a>
//             <a href="#">Services</a>
//             <a href="#">Contact</a>
//           </div>

//           {/* Mobile Button */}
//           <div className="md:hidden">
//             <button onClick={() => setOpen(!open)}>
//               ☰
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <div className="md:hidden flex flex-col space-y-4 pb-4">
//             <a href="#">Home</a>
//             <a href="#">About</a>
//             <a href="#">Services</a>
//             <a href="#">Contact</a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            <div className="text-xl font-bold">
              Logo
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>

            {/* Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setOpen(true)}>
                ☰
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          <button onClick={() => setOpen(false)}>✕</button>
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Contact</a>
        </div>
      </div>
    </>
  );
}