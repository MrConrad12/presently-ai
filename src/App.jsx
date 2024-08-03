import './App.css';
import PrivacyPolicy from './pages/privacy_policy';
import HomePage from './pages/home';
import TermsAndConditions from './pages/terms_conditions';
import SupportPage from './pages/support_page';
import Navbar from './components/navbar';
import "./pages/css/root.css"
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;

function Main() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support_page" element={<SupportPage />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
      </Routes>
    </>

  )

}