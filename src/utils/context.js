import axios from 'axios';
import { createContext, useState } from 'react';

export const CustomContext = createContext();

const Context = ({ children }) => {
  const [gender, setGender] = useState('men');
  const [category, setCategory] = useState('t-short');
  const [price, setPrice] = useState('');
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState({
    data: [],
    error: '',
    dataLength: 0,
  });

  const changeGender = (gender) => {
    setGender(gender);
    setPrice('');
    setSize('');
    setBrand('');
    setPage(1);
  };
  const changeCategory = (category) => {
    setCategory(category);
    setSize('');
    setPrice('');
    setBrand('');
    setPage(1);
  };

  const getProducts = () => {
    axios(
      `http://localhost:4444/catalog?gender=${gender}&category=${category}${
        price !== '' ? '&_sort=price&_order=' + price : ''
      }${brand !== '' ? '&brand=' + brand : ''}`
    )
      .then(({ data }) => {
        setProducts({ data: data, dataLength: data.length, error: '' });
        axios(
          `http://localhost:4444/brands?category=${category}&gender=${gender}`
        )
          .then(({ data }) => setBrands(data[0].brand))
          .catch(() => alert('topilmadi brendlar'));
      })
      .catch((error) => setProducts({ error: error, dataLength: 0, data: [] }));
  };

  const value = {
    changeGender,
    changeCategory,
    gender,
    category,
    getProducts,
    products,
    page,
    setPage,
    price,
    setPrice,
    size,
    setSize,
    brand,
    brands,
    setBrand,
    setBrands,
  };
  return (
    <>
      <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    </>
  );
};
export default Context;
