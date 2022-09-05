import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../../routers/Category/Category";

export type itemCartType = {
  item: productType;
  quantity: number;
};

export type cartType = {
  items: itemCartType[];
  open: boolean;
};

const initialCart: cartType = {
  items: [],
  open: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    // add your non-async reducers here
    addToCart: (state, action) => {
      if (state.items.find((i) => i.item.id === action.payload.id)) {
        return {
          ...state,
          items: state.items.map((e) => {
            if (e.item.id === action.payload.id)
              return {
                item: e.item,
                quantity: e.quantity + 1,
              };
            return e;
          }),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            item: action.payload,
            quantity: 1,
          },
        ],
      };
    },
    deleteFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter((i) => i.item.id !== action.payload.item.id),
      };
    },
    decrementQuantity: (state, action) => {
      const finded = state.items.find((i) => i.item.id === action.payload.id);
      if (finded && finded.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.item.id !== action.payload.id),
        };
      }
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.item.id === action.payload.id) {
            return {
              item: i.item,
              quantity: i.quantity - 1,
            };
          }
          return i;
        }),
      };
    },
    incrementQuantity: (state, action) => {
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.item.id === action.payload.id)
            return {
              item: i.item,
              quantity: i.quantity + 1,
            };
          return i;
        }),
      };
    },
    addQuantity: (state, action) => {
      return {
        ...state,
        items: state.items.map((i) => {
          if (i.item.id === action.payload.item.id)
            return {
              item: i.item,
              quantity: action.payload.quantity,
            };
          return i;
        }),
      };
    },
    closeModal: (state) => {
      return {
        ...state,
        open: false,
      };
    },
    openModal: (state) => {
      return {
        ...state,
        open: true,
      };
    },
  },
});
// Action creators
export const {
  addToCart,
  deleteFromCart,
  decrementQuantity,
  incrementQuantity,
  openModal,
  closeModal,
  addQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
