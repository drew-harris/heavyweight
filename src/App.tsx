import "./App.css";
import * as Tone from "tone";

function App() {
  const playSound = () => {
    var synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C6", 3);
  };
  return (
    <div className="App">
      Successfully Deployed
      <button onClick={playSound}>Make a sound</button>
    </div>
  );
}

export default App;
