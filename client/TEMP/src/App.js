import Speedometer from "./components/SpeedoMeter";
import IotProvider from "./context/iotContext";
const App = () => {
  return (
    <div className="App">
      <IotProvider>
        <Speedometer />
      </IotProvider>
    </div>
  );
}

export default App;

