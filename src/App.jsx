import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
    return (
        <div className="App">
            <h1>Iternary for 7 Days in Houston 🤠</h1>
            <h3>
                Welcome to Houston, Texas!
                <br />
                Check out this calendar to get to know the city an see all the
                sights during your stay!
            </h3>
            <Calendar />
        </div>
    );
};

export default App;
