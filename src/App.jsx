import LogoToDo from "./img/Logo.svg";
import AppCss from "../src/App.module.css"
function App() {
  return (
    <>
      <div className={AppCss.header}>
        <img src={LogoToDo} alt="logo" />
      </div>
    </>
  );
}

export default App;
