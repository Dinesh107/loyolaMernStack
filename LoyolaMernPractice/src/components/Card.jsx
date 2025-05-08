import profilePic from '../assets/Images/puppy-eyes-puppy.gif';
function Card() {
    return(
         <div className="card">
            <img className='card-pic' src={profilePic} alt="profile pic"  />
            <h1>Loyola CSE Students</h1>
            <p>We like to study and Play</p>
         </div>
    );
}

export default Card