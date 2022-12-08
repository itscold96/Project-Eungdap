import React from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import IntroHeader from 'components/IntroHeader/IntroHeader';
import Init from 'pages/Init/Init';
import Main from 'pages/Main/Main';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  const [pathName, setPathName] = useState('/');

  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  return (
    <BrowserRouter>
      {pathName === '/' ? <IntroHeader /> : <Header />}
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/Main' element={<Main />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
