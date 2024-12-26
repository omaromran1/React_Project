type HeaderParam={
    text?:string;
    textsub?:string;
  }
  
  function Header({text,textsub}:HeaderParam){
    return (<>
        <h1>{text}</h1>
        <h5>{textsub}</h5>
    </>

)

  }

  export default Header;