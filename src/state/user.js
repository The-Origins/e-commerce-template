import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import user from "../../lib/data/user.json";
import { fetchSession } from "./session";
import { setSnackBar } from "./snackBar";
import { setCurrency } from "./currency";
import { currencies } from "country-data";

// Thunk to fetch user data with simulated delay
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (props, { dispatch }) => {
    try {
      // Simulate an API request with a setTimeout wrapped in a Promise
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(user);
            clearTimeout(fetchingTimeOut);
          }, 2000);
        });
      };

      // Await the simulated API request
      const data = await simulateApiRequest();
      return data;
    } catch (error) {
      dispatch(
        setSnackBar({
          on: true,
          type: "ERROR",
          message: "Error fetching user data",
        })
      );
      return {};
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: true,
    isLoggedIn: false,
    data: {},
  },
  reducers: {
    setUserFavourites: (state, action) => {
      //change the local value before api response
      //this makes for more resposive feedback when user presses favourite button
      state.data.favourites = action.payload;
    },
    setUserCart: (state, action) => {
      //change the local value before api response
      //this makes for more resposive feedback when user presses add to cart button
      state.data.cart.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        if (Object.keys(state.data).length) {
          state.isLoggedIn = true;
        } else {
          state.isLoggedIn = false;
        }
        state.isFetching = false;
      })
      .addCase(fetchUser.pending, (state, action) => {
        state.isFetching = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isFetching = false;
      });
  },
});

const { setUserCart, setUserFavourites } = userSlice.actions;

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (props, { dispatch }) => {
    props.setStatus({ on: true, type: "LOADING", message: "logging in" });
    try {
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(user);
            clearTimeout(fetchingTimeOut);
          }, 1000);
        });
      };

      const response = await simulateApiRequest();

      dispatch(setCurrency(currencies[response.payments.currency]));
      props.setStatus({
        on: true,
        type: "SUCCESS",
        message: `${response.email} logged in`,
        action: props.onSuccess,
      });
    } catch (error) {
      props.setStatus({
        on: true,
        type: "ERROR",
        message: "Error loggin in",
        action: props.onError,
      });
    }
    await dispatch(fetchUser());
    await dispatch(fetchSession());
  }
);

export const logoutUser = createAsyncThunk(
  "user/logoutUser",
  async (props, { dispatch }) => {
    await dispatch(fetchUser());
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (props, { dispatch }) => {
    props.setStatus({ on: true, type: "LOADING", message: "registering" });
    try {
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(props.data);
            clearTimeout(fetchingTimeOut);
          }, 1000);
        });
      };

      await simulateApiRequest();

      props.setStatus({
        on: true,
        type: "SUCCESS",
        message: `Account successfully created`,
        action: props.onSuccess,
        actionTitle: "back to login",
      });
    } catch (error) {
      props.setStatus({
        on: true,
        type: "ERROR",
        message: "Error registering",
        action: props.onError,
      });
    }
    await dispatch(fetchUser());
  }
);

export const checkOutUser = createAsyncThunk(
  "user/checkOutUser",
  async (props, { dispatch }) => {
    props.setStatus({ on: true, type: "LOADING", message: "Awaiting payment" });
    try {
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve("HX210091234");
            clearTimeout(fetchingTimeOut);
          }, 1000);
        });
      };
      const orderId = await simulateApiRequest();
      props.setStatus({
        on: true,
        type: "SUCCESS",
        message: `Order ${orderId} confirmed`,
        action: props.onSuccess,
        actionTitle: "done",
      });
    } catch (error) {
      props.setStatus({
        on: true,
        type: "ERROR",
        message: "Error checking out",
        action: props.onError,
      });
    }
    await dispatch(fetchUser());
  }
);

export const verifyCode = createAsyncThunk(
  "user/verifyCode",
  async (props, { dispatch }) => {
    props.setStatus({ on: true, type: "LOADING", message: "verifying" });
    try {
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(" ");
            clearTimeout(fetchingTimeOut);
          }, 1000);
        });
      };
      await simulateApiRequest();

      props.setStatus({ on: false });
      props.onSuccess();
    } catch (error) {
      props.setStatus({
        on: true,
        type: "ERROR",
        message: "Error saving address",
        action: props.onError,
      });
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (props, { dispatch }) => {
    switch (props.path) {
      case "cart":
        await dispatch(updateCart(props));
        break;
      case "favourites":
        await dispatch(updateFavourites(props));
        break;
      case "addresses":
        await dispatch(updateAddresses(props));
        break;
      case "payments":
        await dispatch(updatePayments(props));
        break;
      case "email":
        await dispatch(updateEmail(props));
        break;
      case "phone":
        await dispatch(updatePhone(props));
        break;
      case "currency":
        await dispatch(updateCurrency(props));
        break;
      case "password":
        await dispatch(updatePassword(props));
        break;
      default:
        await dispatch(fetchUser());
    }
  }
);

export const updateRecent = createAsyncThunk(
  "user/updateRecent",
  async (props, { dispatch }) => {
    await dispatch(fetchUser());
    await dispatch(fetchSession());
  }
);

const updateFavourites = createAsyncThunk(
  "user/updateFavourites",
  async (props, { dispatch}) => {
    const { productId, details } = props.data;

    dispatch(
      setSnackBar({
        on: true,
        type: "SUCCESS",
        message: `Successful action ${props.action} for product ${productId} to ${props.path}`,
      })
    );
    await dispatch(fetchUser());
  }
);

const updateCart = createAsyncThunk(
  "user/updateCart",
  async (props, { dispatch }) => {
    const { productId, details } = props.data;

    dispatch(
      setSnackBar({
        on: true,
        type: "SUCCESS",
        message: `Successful action ${props.action} for product ${productId} to ${props.path}`,
      })
    );

    await dispatch(fetchUser());
  }
);

const updateAddresses = createAsyncThunk(
  "user/updateAddresses",
  async (props, { dispatch }) => {
    switch (props.action) {
      case "ADD":
        try {
          props.setStatus({
            on: true,
            type: "LOADING",
            message: "saving address",
          });
          const simulateApiRequest = () => {
            return new Promise((resolve) => {
              const fetchingTimeOut = setTimeout(() => {
                resolve(props.data);
                clearTimeout(fetchingTimeOut);
              }, 1000);
            });
          };

          const address = await simulateApiRequest();

          props.setStatus({
            on: true,
            type: "SUCCESS",
            message: `New address '${address.name}' saved`,
            action: props.onSuccess,
          });
        } catch (error) {
          props.setStatus({
            on: true,
            type: "ERROR",
            message: "Error saving address",
            action: props.onError,
          });
        }
        break;
      case "DELETE":
        break;
      default:
        break;
    }
    await dispatch(fetchUser());
  }
);

const updatePayments = createAsyncThunk(
  "user/updatePayments",
  async (props, { dispatch }) => {
    switch (props.action) {
      case "ADD": {
        try {
          props.setStatus({
            on: true,
            type: "LOADING",
            message: "saving payment",
          });
          const simulateApiRequest = () => {
            return new Promise((resolve) => {
              const fetchingTimeOut = setTimeout(() => {
                resolve(props.data);
                clearTimeout(fetchingTimeOut);
              }, 1000);
            });
          };

          const payment = await simulateApiRequest();

          props.setStatus({
            on: true,
            type: "SUCCESS",
            message: `New ${payment.type} payment ${payment.details.number} saved`,
            action: props.onSuccess,
          });
        } catch (error) {
          props.setStatus({
            on: true,
            type: "ERROR",
            message: "Error saving payment",
            action: props.onError,
          });
        }
        break;
      }
      case "DELETE":
        break;
      default:
        break;
    }
    await dispatch(fetchUser());
  }
);

const updateEmail = createAsyncThunk(
  "user/updateEmail",
  async (props, { dispatch }) => {
    await dispatch(fetchUser());
  }
);

const updatePhone = createAsyncThunk(
  "user/updatePhone",
  async (props, { dispatch }) => {
    await dispatch(fetchUser());
  }
);

const updateCurrency = createAsyncThunk(
  "user/updateCurrency",
  async (props, { dispatch }) => {
    dispatch(setCurrency(currencies[props.data.currency]));
    await dispatch(fetchUser());
  }
);

const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (props, { dispatch }) => {
    props.setStatus({
      on: true,
      type: "LOADING",
      message: "changing password",
    });
    try {
      const simulateApiRequest = () => {
        return new Promise((resolve) => {
          const fetchingTimeOut = setTimeout(() => {
            resolve(props.data.email);
            clearTimeout(fetchingTimeOut);
          }, 1000);
        });
      };
      const email = await simulateApiRequest();
      props.setStatus({
        on: true,
        type: "SUCCESS",
        message: `Password for ${email} changed`,
        action: props.onSuccess,
      });
    } catch (error) {
      props.setStatus({
        on: true,
        type: "ERROR",
        message: "Error changing password",
        action: props.onError,
      });
    }
    await dispatch(fetchUser());
  }
);

// Other functions to update user

export default userSlice.reducer;
