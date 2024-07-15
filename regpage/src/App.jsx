
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Welcome from './Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
