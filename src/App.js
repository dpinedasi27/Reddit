import Error404 from "containers/errors/404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import {Provider} from 'react-redux'
import Reddit from "containers/pages/Reddit";
import './i18n'; 

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route>
            {/*Error display*/}
            <Route path="*" element={<Error404/>}/>
            {/*Home display*/}
            <Route path="/" element={<Reddit/>}/>
          </Route>
        </Routes>
      </Router> 
    </Provider> 
  );
}

export default App;
