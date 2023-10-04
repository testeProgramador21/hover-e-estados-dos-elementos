import { Autour_One } from "next/font/google";

const Page = () => {
  return (
    <div className="container mx-auto">

      <input type="text" className="w-full h-7 border-2 border-black m-3 focus:bg-green-200" />
      
      <button className="bg-red-200 p-4 hover:bg-blue-200">Clique aqui</button>
    </div>
  );
}

export default Page;