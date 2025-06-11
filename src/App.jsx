import Layout from '@/components/layout/AuthLayout'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}/>
      </Routes>
    </div>
  )
}
