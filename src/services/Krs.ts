import { MataKuliah, MataKuliahResponse } from "@/types/Krs";
import fetchData from "./FetchData";

export const getMataKuliahPaket = async (
    tahunId: string,
    mkPaketId: string
  ): Promise<MataKuliahResponse> => {
    const data = await fetchData<MataKuliahResponse>(
      `${import.meta.env.VITE_APP_API_URL}/krs/krs-paket-pilih?tahun_id=${tahunId}&mk_paket_id=${mkPaketId}`
    );
    console.log(data);
    return data || { status: "error", data: [], code: 500 };
  };




  export interface KrsItem {
    JadwalID: number;
    MKKode: string;
    MK_id: number;
    NamaMK: string;
    SKS: number;
  }
  
  export interface KrsPayload {
    KhsID: string;
    KrsData: KrsItem[];
    TahunID: string;
  }
  
  export interface KrsResponse {
    status: string;
    data: MataKuliah[][];
    code: number;
  }
  
  export const simpanKrs = async (payload: KrsPayload): Promise<KrsResponse> => {
    const data = await fetchData<KrsResponse>(`${import.meta.env.VITE_APP_API_URL}/krs/simpan`, {
      method: "POST",
      data: payload,
    });
    console.log("Response dari simpanKrs:", data);
    return data || { status: "error", data: [], code: 500 };
  };


export interface MkPaketItem {
  mkpaketid: number;
  nama: string;
  prodi_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface MkPaketResponse {
  status: string;
  data: [MkPaketItem[]]; 
  code: number;
}

export const getMkPaketList = async (tahunId: string): Promise<MkPaketResponse> => {
  const data = await fetchData<MkPaketResponse>(
    `${import.meta.env.VITE_APP_API_URL}/krs/paket-mk?tahun_id=${tahunId}`
  );
  console.log("MkPaketResponse:", data);
  return data || { status: "error", data: [[]], code: 500 };
};
