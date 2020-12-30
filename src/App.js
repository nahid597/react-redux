import Cake from "./component/cake/cake";
import { Provider } from "react-redux";

import "./App.css";
import store from "./redux/state/state";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cake />
      </div>
    </Provider>
  );
}

export default App;
