const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit')

export const fetchProducts = createAsyncThunk("fetchProducts",async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    const result = await res.json();
    return result;
})
const ProductSlice = createSlice({
    name:'products',
    initialState:{
        data:null,
        isLoader:false,
        isError:false
    },
    extraReducers:builder => {
        builder.addCase(fetchProducts.pending,(state,action) => {
                state.isLoader = true;

        })
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.isLoader = false;
            state.data = action.payload;//cập nhập dữ liệu và thay đổi trạng thái
        })
        builder.addCase(fetchProducts.rejected,(state,action) => {
            state.isLoader = false,
            state.isError = true;
        })
    }
})

export default ProductSlice.reducer;