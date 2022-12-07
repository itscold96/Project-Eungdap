import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Init from 'pages/Init/Init';
import Main from 'pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/Main' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
