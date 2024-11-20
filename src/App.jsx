import "./styles/App.css";
import UniversalInput from "./components/UniversalInput.jsx";
import { useLocalStorageState } from "./hooks/useLocalStorageState.jsx";

const App = () => {
  const [firstValue, setFirstValue] = useLocalStorageState('firstValue');
  const [secondValue, setSecondValue] = useLocalStorageState('secondValue');
  const [thirdValue, setThirdValue] = useLocalStorageState('thirdValue');
  const [fourValue, setFourValue] = useLocalStorageState('fourValue');
  const [fiveValue, setFiveValue] = useLocalStorageState('fiveValue');

  return (
    <div className="main">
      <h1 className="title">THIS IS NOT A TEST TASK</h1>
      <div className="inputItems">
        <UniversalInput
          type="number"
          disabled={false}
          value={firstValue}
          onChange={(value) => setFirstValue(value)} // Прокидываем в состояние value, вместо event. Теперь не undefined.
          placeholder="Number type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={secondValue}
          onChange={(value) => setSecondValue(value)} // Прокидываем в состояние value, вместо event. Теперь не undefined.
          placeholder="Text type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          multiline={true}
          disabled={false}
          value={thirdValue}
          onChange={(value) => setThirdValue(value)} // Прокидываем в состояние value, вместо event. Теперь не undefined.
          placeholder="Text multiline type"
          style={{ width: "100%" }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={fourValue}
          onChange={(value) => setFourValue(value)} // Прокидываем в состояние value, вместо event. Теперь не undefined.
          mask={"111-111"}
          placeholder="With mask"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          }}
          className="inputItem"
        />
        <UniversalInput
          disabled={false}
          value={fiveValue}
          onChange={(value) => setFiveValue(value)} // Прокидываем в состояние value, вместо event. Теперь не undefined.
          options={[
            { value: "first element", label: "first element" },
            { value: "second element", label: "second element" },
            { value: "third element", label: "third element" },
          ]}
          placeholder="Another type"
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          }}
          className="inputItem"
        />
      </div>
    </div>
  );
};

export default App;
