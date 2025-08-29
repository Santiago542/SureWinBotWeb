import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainApp from './MainApp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FAQ from './pages/FAQ'
import SurebetCalculator from './pages/SurebetCalculator'
import ValuebetCalculator from './pages/ValuebetCalculator'
import PaymentCompleted from './pages/PaymentCompleted'
import PaymentFailed from './pages/PaymentFailed'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  // Use basename only in production (GitHub Pages)
  const basename = process.env.NODE_ENV === 'production' ? '/SureWinBotWeb' : '';
  
  return (
    <div className="App">
      <Router basename={basename}>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/surebet-calculator" element={<SurebetCalculator />} />
          <Route path="/valuebet-calculator" element={<ValuebetCalculator />} />
          <Route path="/payment-completed" element={<PaymentCompleted />} />
          <Route path="/payment-failed" element={<PaymentFailed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
