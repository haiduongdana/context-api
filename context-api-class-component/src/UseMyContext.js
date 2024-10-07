import React, { useContext } from "react";
import MyContext from "./MyContext";

const UseMyContext = () => {
 const context = useContext(MyContext);
 console.log(context.themes);
 return <h1>Theme value: {context.themes.light.foreground}</h1>;
};

export default UseMyContext;