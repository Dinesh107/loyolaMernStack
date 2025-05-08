function Food() {
   
   const food1 = "Briyani";
   const food2 = "Maggi";

   return(
      <ul>
        <h3>Food Section</h3>
        <li>Apple</li>
        <li>{food1.toUpperCase()}</li>
        <li>{food2.toLowerCase()}</li>
      </ul>
   );
}

export default Food