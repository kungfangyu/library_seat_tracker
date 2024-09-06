/*
 * @Author: Fangyu Kung
 * @Date: 2024-09-06 15:06:56
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-09-06 16:33:35
 * @FilePath: /library_seat_tracker/src/apis/libraryList.js
 */
import axios from "./axios";

export const getLibraryList = async () => {
  return await axios({
    url: `/getlibrarylist`,
    method: "get",
  });
};
