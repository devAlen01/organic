import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct, PRODUCT } from "../../types";

const api =
  "https://api.elchocrud.pro/api/v1/a3b38b26d0564f849e94217dac22b7d7/organick1";
const cart_api =
  "https://api.elchocrud.pro/api/v1/c9cddd76d44f371095050067ac8929c8/organic1_cart";

type initialStateType = {
  product: IProduct[];
  isLoading: boolean;
  detail: IProduct;
  cart: IProduct[];
  oneProduct: IProduct;
};

const initialState: initialStateType = {
  product: [],
  isLoading: false,
  detail: JSON.parse(localStorage.getItem("detail") as string) || {},
  cart: [],
  oneProduct: JSON.parse(localStorage.getItem("editProduct") as string) || {},
};

export const postReq: any = createAsyncThunk(
  "product/postReq",
  async (newProduct: PRODUCT.postReq, { rejectWithValue }) => {
    try {
      const response = await axios.post(api, newProduct);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getProduct: any = createAsyncThunk("product/get", async () => {
  try {
    const { data } = await axios(api);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const removeProduct: any = createAsyncThunk(
  "product/remove",
  async (_id: number) => {
    try {
      const { data } = await axios.delete(`${api}/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
// ? EDIT func
export const getOneProduct: any = createAsyncThunk(
  "product/getOneProduct",
  async (_id: number) => {
    try {
      const { data } = await axios(`${api}/${_id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const editPostReq: any = createAsyncThunk(
  "product/editPost",
  async ({ id, newObj }: { id: number; newObj: any }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`${api}/${id}`, newObj);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
// ? EDIT func

// ! cart func

export const addToCart: any = createAsyncThunk(
  "product/addToCart",
  async (product: PRODUCT.postReq, { rejectWithValue }) => {
    try {
      const response = await axios.post(cart_api, product);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getProductCart: any = createAsyncThunk(
  "productCart/get",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(cart_api);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const removeProductCart: any = createAsyncThunk(
  "productCart/remove",
  async (id: number) => {
    try {
      const { data } = await axios.delete(`${cart_api}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

// !cart func end

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    detail(state, action: PayloadAction<IProduct>) {
      state.detail = action.payload;
      localStorage.setItem("detail", JSON.stringify(state.detail));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postReq.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
      })
      .addCase(editPostReq.fulfilled, (state, action) => {
        state.product.push(action.payload);
      });
    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
    builder
      .addCase(getProductCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(removeProductCart.fulfilled, (state, action) => {
        state.cart = action.payload;
      });
  },
});

export const { detail } = productSlice.actions;

export default productSlice.reducer;
