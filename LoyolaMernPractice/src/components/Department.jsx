function Department() {
    const dept1 = "CSE";
    const dept2 = "IT";
    const dept3 = "EEE";
    const dept4 = "ECE";
    const dept5 = "MECH";

   return(
    <ul>
    <h3>Departments</h3>
    <li>{dept1}</li>
    <li>{dept2}</li>
    <li>{dept3}</li>
    <li>{dept4}</li>
    <li>{dept5}</li>
  </ul>
   );
}

export default Department