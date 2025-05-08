import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Department from "./components/Department";
import Card from "./components/Card";
import Student from "./components/Student";
import StudentGreeting from "./components/StudentGreeting";

function App() {
  return (
    <>
      <Header />
      <StudentGreeting isLoggedIn={false} username="LoyolaStudent" />
      <Student name="Selva" age={20} isStudent={false} />
      <Student name="Abi" age={22} isStudent={true} />
      <Student name="sanjay" age={19} isStudent={true} />
      <Student name="Jaya suriya" age={26} isStudent={false} />
      <Card />
      <Food />
      <Department />
      <Footer />
    </>
  );
}

export default App;
