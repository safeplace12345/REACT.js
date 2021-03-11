import  React  from "react";
import './componets/App.css'
import Header from './componets/header/header.jsx'
import Main from './componets/main/main'
import {Footer} from './componets/footer/footer'
function App(){
    return <div className="trunk">
        <Header></Header>
        <Main author="John"></Main>
        <Footer></Footer>
    </div>
}
export default App;