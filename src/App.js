import SportsMain from "./components/SportsMain";
import { Route, Routes } from 'react-router-dom';
import SportsHeader from "./components/SportsHeader";
import SportsHistory from "./components/SportsHistory";
import SportsChallenge from "./components/SportsChallenge";
import {RecoilRoot} from 'recoil';
function App() {
  return (
  <RecoilRoot>
    <Routes>
      <Route element={<SportsHeader/>}>
            <Route path='/' element={<SportsMain />} />
            <Route path='/history' element={<SportsHistory />} />
            <Route path='/challenge' element={<SportsChallenge />} />
        </Route>
    </Routes>
  </RecoilRoot>
  );
}

export default App;
