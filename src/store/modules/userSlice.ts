import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models/user.model';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: 'b150b535-66ec-4fb5-8598-89d8fe762bb7',
    name: 'maria'
  } as User,
  reducers: {}
});

export default userSlice.reducer;
