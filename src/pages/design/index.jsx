import React, { useState, useEffect } from 'react';
import { getPicsumImages } from '@src/lib/api';
// layouts
import HomeLayout from '@src/layouts/HomeLayout';
import GalleryPolaroid from '@src/components/GalleryPolaroid';

export default function DesignPage() {
  const [picsumArr, setPicsumArr] = useState([]);

  async function getImage() {
    const tempArr = await getPicsumImages(1);
    setPicsumArr(tempArr);
  }

  useEffect(() => {
    getImage();
  }, []);
  return (
    <HomeLayout>
      <GalleryPolaroid picsumArr={picsumArr} />
    </HomeLayout>
  );
}
