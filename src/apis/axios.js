/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-06 15:04:57
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-06 16:44:53
 * @FilePath: /library_seat_tracker/src/apis/axios.js
 */
import axios from "axios";

const service = axios.create({
  baseURL:
    "https://f189-2001-b400-e246-50fe-414e-8d27-b596-3573.ngrok-free.app/",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default service;
