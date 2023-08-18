import React from 'react';
import HeaderCircle from '../components/HeaderCircle';
import Footer from '../components/Footer';

export default function HomeLayout({ children }) {
  return (
    <>
      <HeaderCircle />
      {children}
      <Footer />
    </>
  );
}
