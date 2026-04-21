import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App
