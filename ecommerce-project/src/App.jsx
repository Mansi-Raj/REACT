import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/CheckoutPage';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="Checkout" element={<CheckoutPage />}></Route>
    </Routes>
  )
}

export default App
