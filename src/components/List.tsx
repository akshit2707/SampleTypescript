import React from "react";

interface IProps {

    people :{
     name :string
     age  : number 
     url : string
     comment?:string
    }[]
  }

const List: React.FC<IProps>= () => {
  return <div>I am a list</div>;
};


export default List;