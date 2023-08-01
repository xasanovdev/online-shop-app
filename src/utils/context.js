import axios from 'axios';
import { createContext, useState } from 'react';

export const CustomContext = createContext();

const Context = ({ children }) => {
  const [gender, setGender] = useState('men');
  const [category, setCategory] = useState('t-short');
  const [products, setProducts] = useState({
    data: [],
    error: '',
  });

  const changeGender = (gender) => {
    setGender(gender);
  };
  const changeCategory = (category) => {
    setCategory(category);
  };

  const getProducts = () => {
    axios(`http://localhost:4444/catalog?gender=${gender}&category=${category}`)
      .then(({ data }) => setProducts({ ...products, data: data }))
      .catch((error) => setProducts({ ...products, error: error }));
  };

  const value = {
    changeGender,
    changeCategory,
    gender,
    category,
    getProducts,
    products,
  };
  return (
    <>
      <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    </>
  );
};
export default Context;
