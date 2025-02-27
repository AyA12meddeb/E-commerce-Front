import {configureStore} from '@reduxjs/toolkit';

import userSlice from '../redux/slices/userSlice';
import productSlise from '../redux/slices/productSlice'
import cartSlice from '../redux/slices/cartSlice'


export default configureStore({reducer:{user:userSlice, products:productSlise,cart:cartSlice}})
