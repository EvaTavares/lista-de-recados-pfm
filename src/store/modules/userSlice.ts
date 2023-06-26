import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user.model';
import { LoginProps } from '../../models/login.model';
import { ApiService } from '../../services/api.service';

export const loginAction = createAsyncThunk('user/login', async (props: LoginProps) => {
  const result = await ApiService.login(props);
  console.log(result);

  return result;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginAction.fulfilled, (_, action) => {
      console.log(action.payload.data);
      return action.payload.data;
    });
  }
});

export default userSlice.reducer;
