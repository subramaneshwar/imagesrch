import { useState } from "react";
import { createContext } from "react";

export const Dats   = createContext();


function CustomProvider({children}) {
    const [Datas, setDatas] = useState([])
  return (
    <Dats.Provider value={{Datas, setDatas}}>{children}</Dats.Provider>
  )
}

export default CustomProvider