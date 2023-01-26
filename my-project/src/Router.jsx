import React from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Main from 'pages/Main/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from 'pages/Intro/Intro';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';
import MakingSurvey from 'pages/MakingSurvey/MakingSurvey';
import ResponseSurvey from 'pages/ResponseSurvey/ResponseSurvey';

function Router() {
  return (
    <BrowserRouter>
      {/* 페이지 이동 시 스크롤을 맨위로 오도록 해줌 */}
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/MakingSurvey' element={<MakingSurvey />} />
        <Route path='/ResponseSurvey' element={<ResponseSurvey />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
