import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_POST, GET_POSTS } from 'redux/posts/type';
import { params } from 'react'
import { API_URL } from 'config/config'

export const getPosts = createAsyncThunk(
  GET_POSTS, async () => {
    const response = await axios.get(`${API_URL}/posts`);
    console.log(getPosts);
    return response.data;
  }
);

export const getPost = createAsyncThunk( 
  GET_POST, async (params) => {
    const response = await axios.get(`${API_URL}/posts/${params.id}`);
    return response.data;
  }
);
