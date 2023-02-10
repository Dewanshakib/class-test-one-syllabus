import { useState } from "react";
import { syllabus_Data } from "./Syllabus_data";



export const Project = () => {
    const [dark,setDark] = useState(false);
    const [query,setQuery] = useState("")

  return (
    <section className={dark ? 'dark' : ''}>
      <div className="w-full h-screen overflow-y-auto px-6 font-sans flex flex-col gap-4 items-center dark:bg-gray-800 sm:px-10 md:20 lg:40">

        <div className="py-2 flex justify-around  items-center w-full">
          <img src="./S-14.png" alt="logo" className="w-10 h-auto"/>

          <button onClick={() => {
            setDark(!dark)
          }}>
          <i className="fa-solid fa-moon text-xl text-gray-500"></i>
          </button>
        </div>

        <div className="py-4">
          <input
            type="text"
            className="px-4 py-2 w-[360px] border border-gray-600 rounded-xl mx-auto outline-none lg:w-[600px]"
            placeholder="Sobai Search korba english e......"
          onChange={(e) => {setQuery(e.target.value)}} />
        </div>

        <div className="flex flex-col gap-6 flex-wrap md:flex-row">
          {syllabus_Data.filter((item) => item.title.toLocaleLowerCase().includes(query)).map((item) => {
            return (
              <div key={item.id} className=" w-[360px] h-auto relative">
                <img key={item.id} src={item.img} alt="logo" className="drop-shadow-2xl w-[360px]  overflow-hidden h-auto rounded-2xl transform transition delay-900 hover:scale-105" />
                   <div className="py-2 flex flex-row items-center gap-8 ">
                    <h2 className="font-medium dark:text-gray-100">📙 {item.title}</h2>
                    <a href={item.img} download={item.name} className="absolute top-5 right-5 bg-gradient-to-r from-teal-300 to-cyan-300 px-3 py-1 font-medium text-sm text-gray-900 rounded-xl transform transition delay-900 hover:scale-105">{item.down}</a>
                    <h2 className="font-semibold dark:text-gray-200">📝 {item.test}</h2>
                   </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
