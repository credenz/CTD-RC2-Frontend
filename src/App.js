import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Submissions from './components/Submissions/Submissions';
import Testcase from './components/Testcase/Testcase';
import QuestionHub from './components/QuestionHub/QuestionHub';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Instructions from './components/Instructions/Instructions';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/submissions" component={Submissions} />
    <Route path="/testcases" component={Testcase} />
    <Route path="/questionhub" component={QuestionHub} />
    <Route path="/instructions" component={Instructions} />
    </Switch>      
    </Router>
    <Footer/>    
    </div>
  );
}

export default App;