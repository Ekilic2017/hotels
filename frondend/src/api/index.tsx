
// base url'e sahip bir axios örneği oluşturduk
import axios from "axios";
import { PlaceData } from "../types";

const api = axios.create({ baseURL: "http://localhost:4001" });
//bütün konaklama yerlerini getiren fonksiyon
 export type Params={
    location:string;
    title:string;
    order:string;
}
export const getPlaces=(params:Params)=>api.get("/api/places",{params})
.then((res)=>res.data.places);
//1 konaklama yerini getir
export const getPlace=(id:string)=>api.get(`/api/place/${id}`)
.then((res)=>res.data.place);
//1 konaklama yerini sil
export const delPlace=(id:number)=>api.delete(`/api/place/${id}`)

//1 konaklama yerini oluştur
export const createPlace=(body:PlaceData)=>api.post(`/api/place/`,body)