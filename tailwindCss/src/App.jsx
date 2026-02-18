import React from 'react';

const App = () => {

  const products = [
    { name: "Nike Pegasus 41 shoes", category: "Shoes", offerPrice: 999, inStock: true, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png", },
    { name: "Nike Pegasus 41 shoes", category: "Shoes", offerPrice: 999, inStock: false, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png", },
    { name: "Nike Pegasus 41 shoes", category: "Shoes", offerPrice: 999, inStock: true, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", },
  ];
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <div>
        <h2 className='text-2xl font-semibold'>Product pages</h2>
        <div className='bg-white rounded-2xl'>
          <table className='w-full text-left'>
            <tr className='border-b'>
              <th className='p-4'>Products</th>
              <th className='p-4'>Category</th>
              <th className='p-4'>Selling Price</th>
              <th className='p-4'>In Stock</th>
            </tr>
            {products.map((i, id) => {
              return <tr key={i.id}>
                <td className='flex justify-start align-middle p-4'>
                  <img className="w-22 h-22" src={i.image}></img>
                  <span className='pt-8 px-3'>{i.name}</span>
                </td>
                <td className='p-4'>{i.category}</td>
                <td className='p-4'>${i.offerPrice}</td>
                <td className='p-4'>
                  <label>
                    <input className='w-6 h-6 accent-blue-700' type="checkbox" defaultChecked={i.inStock}></input>
                  </label>
                </td>
              </tr>
            })}

          </table>
        </div>
      </div>
    </div>
  );
};

export default App;


// import React from "react";
// import shoe1 from "./assets/shoes.jpg";
// import shoe2 from "./assets/shoes.jpg";
// import shoe3 from "./assets/shoes.jpg";

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-10">
//       <h1 className="text-2xl font-semibold mb-6">All Products</h1>

//       <div className="bg-white rounded-lg shadow border">
//         <table className="w-full text-left">
//           <thead className="bg-gray-50 border-b">
//             <tr>
//               <th className="p-4">Product</th>
//               <th className="p-4">Category</th>
//               <th className="p-4">Selling Price</th>
//               <th className="p-4">In Stock</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr className="border-b">
//               <td className="p-4 flex items-center gap-4">
//                 <img src={shoe1} className="w-16 h-16 rounded " />
//                 <span className="text-blue-600">Nike Pegasus 41 shoes</span>
//               </td>
//               <td className="p-4">Shoes</td>
//               <td className="p-4">$999</td>
//               <td className="p-4">
//                 <input type="checkbox"  className="w-5 h-5 accent-blue-600" />
//               </td>
//             </tr>

//             <tr className="border-b">
//               <td className="p-4 flex items-center gap-4">
//                 <img src={shoe2} className="w-16 h-16 rounded " />
//                 <span className="text-blue-600">Nike Pegasus 41 shoes</span>
//               </td>
//               <td className="p-4">Shoes</td>
//               <td className="p-4">$999</td>
//               <td className="p-4">
//                 <input type="checkbox" className="w-5 h-5 accent-blue-600" />
//               </td>
//             </tr>

//             <tr>
//               <td className="p-4 flex items-center gap-4">
//                 <img src={shoe3} className="w-16 h-16 rounded " />
//                 <span className="text-blue-600">Nike Pegasus 41 shoes</span>
//               </td>
//               <td className="p-4">Shoes</td>
//               <td className="p-4">$999</td>
//               <td className="p-4">
//                 <input type="checkbox" defaultChecked className="w-5 h-5 accent-blue-600" />
//               </td>
//             </tr>

//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default App;

