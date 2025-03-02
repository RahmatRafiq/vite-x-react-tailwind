// types/Profile.ts

export interface Mahasiswa {
    mhsw_id: string;
    nama_mahasiswa: string;
    prodi: string;
    total_sks_lulus: number;
    jumlah_matakuliah_sekarang: number;
    jumlah_matakuliah_tahun_ini: number;
    total_sks_tahun_ini: number;
    tahun_terbaru: string;
  }
  
  export interface ProfileResponse {
    status: string;
    data: Mahasiswa[][];
    code: number;
  }
  