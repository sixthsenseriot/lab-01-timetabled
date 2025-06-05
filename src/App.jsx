import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
    return (
        <div className="App">
            <h1>Itinerary for 7 Days in Houston 🤠</h1>
            <h4>
                Howdy and welcome to Houston, Texas!
                <br />
                Check out this calendar to get to know the city.
            </h4>
            <hr />
            <Calendar />
        </div>
    );
};

export default App;
