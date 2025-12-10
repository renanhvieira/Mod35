import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Restaurant from '../pages/Restaurant'
import Delivery from '../pages/Checkout/Delivery'
import Payment from '../pages/Checkout/Payment'
import Confirmation from '../pages/Checkout/Confirmation'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
    <Route path="/checkout/entrega" element={<Delivery />} />
    <Route path="/checkout/pagamento" element={<Payment />} />
    <Route path="/checkout/confirmacao" element={<Confirmation />} />
  </Routes>
)

export default AppRoutes
