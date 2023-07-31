import { createContext, useState } from 'react';

export const CustomContext = createContext();

const Context = ({ children }) => {
  const [gender,setGender] = useState('men')
  const [category, setCategory] = useState('t-short');

  const changeGender = (gender) => {
    setGender(gender)
  }
  const changeCategory = (category) => {
    setCategory(category);
  }


  const value = {
    changeGender,
    changeCategory,gender,category
  };
  return (
    <>
      <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    </>
  );
};
export default Context;
