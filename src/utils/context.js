import axios from 'axios';
import { createContext, useReducer } from 'react';

export const CustomContext = createContext();

export const reducer = (state, action) => {
  switch (action.type) {
    case 'changeGender':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          gender: action.payload,
          page: 1,
          brand: '',
        },
      };

    case 'changeCategory':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          category: action.payload,
          page: 1,
          brand: '',
          size: '',
        },
      };

    case 'setProducts':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          products: {
            data: action.payload.data,
            dataLength: action.payload.dataLength,
            error: action.payload.error,
          },
        },
      };

    case 'catchProducts':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          products: {
            error: action.payload.error,
            dataLength: 0,
            data: [],
          },
        },
      };

    case 'setBrands':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          brands: action.payload,
        },
      };

    case 'changeBrand':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          brand: action.payload.brand,
          page: 1,
        },
      };

    case 'changePrice':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          price: action.payload.price,
          page: action.payload.page,
        },
      };

    case 'changeSize':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          size: action.payload.size,
          page: 1,
          products: {
            ...state.catalog.products,
            dataLength: action.payload.length,
          },
        },
      };

    case 'changePage':
      return {
        ...state,
        catalog: {
          ...state.catalog,
          page: action.payload,
        },
      };

    case 'setFavorite':
      return {
        ...state,
        favorites: {
          data: [
            ...state.favorites.data,
            state.catalog.products.data.find((el) => el.id == action.payload),
          ],
          dataLength: state.favorites.dataLength + 1,
        },
      };

    case 'deleteFavorite':
      return {
        ...state,
        favorites: {
          data: state.favorites.data.filter(
            (favorite) => favorite.id != action.payload
          ),
          dataLength: state.favorites.dataLength - 1,
        },
      };

    case 'setOrder':
      return {
        ...state,
        orders: {
          data: [
            ...state.orders.data.filter(
              (product) => product.size != action.payload.size
            ),
            action.payload,
          ],
          dataLength: state.orders.dataLength + 1,
        },
      };
    case 'deleteOrder':
      return {
        ...state,
        orders: {
          data: state.orders.data.filter((order) => order.id != action.payload),
          dataLength: state.orders.dataLength - 1,
        },
      };

    case 'resetOrders':
      return {
        ...state,
        orders: { data: [], dataLength: 0 },
      };
    default:
      return state;
  }
};
function init(initialState) {
  return { ...initialState };
}

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      catalog: {
        gender: 'woman',
        category: 't-short',
        price: '',
        page: 1,
        size: '',
        brands: [],
        brand: '',
        products: {
          data: [],
          error: '',
          dataLength: 0,
        },
      },
      favorites: {
        data: [],
        dataLength: 0,
      },
      orders: {
        data: [],
        dataLength: 0,
      },
    },
    init
  );

  const changeGender = (gender) => {
    dispatch({ type: 'changeGender', payload: gender });
  };
  const changeCategory = (category) => {
    dispatch({ type: 'changeCategory', payload: category });
  };

  const setProductForFavorites = (id) => {
    dispatch({ type: 'setFavorite', payload: id });
  };
  const deleteProductForFavorites = (id) => {
    dispatch({ type: 'deleteFavorite', payload: id });
  };

  const setProductForOrders = (product) => {
    dispatch({ type: 'setOrder', payload: product });
  };
  const deleteProductForOrders = (id) => {
    dispatch({ type: 'deleteOrder', payload: id });
  };

  const getProducts = () => {
    axios(
      `http://localhost:4444/catalog?gender=${state.catalog.gender}&category=${
        state.catalog.category
      }${
        state.catalog.price !== ''
          ? '&_sort=price&_order=' + state.catalog.price
          : ''
      }${state.catalog.brand !== '' ? '&brand=' + state.catalog.brand : ''}`
    )
      .then(({ data }) => {
        dispatch({
          type: 'setProducts',
          payload: { data: data, dataLength: data.length, error: '' },
        });
        axios(
          `http://localhost:4444/brands?category=${state.catalog.category}&gender=${state.catalog.gender}`
        )
          .then(({ data }) => {
            dispatch({ type: 'setBrands', payload: { data: data[0].brand } });
          })
          .catch(() => alert('topilmadi brendlar'));
      })
      .catch((error) => {
        dispatch({ type: 'catchProducts', payload: { error: error } });
      });
  };

  const value = {
    dispatch,
    state,
    changeGender,
    changeCategory,
    getProducts,
    setProductForFavorites,
    deleteProductForFavorites,
    setProductForOrders,
    deleteProductForOrders,
  };
  return (
    <>
      <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
    </>
  );
};
export default Context;
