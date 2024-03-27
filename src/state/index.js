import {configureStore} from "@reduxjs/toolkit"
import storeReducer from "./store"

const store = configureStore({
    reducer:storeReducer
})

export default store