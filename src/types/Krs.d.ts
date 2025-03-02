export interface MataKuliah {
    mk_paket_isi_id: number;
    mk_id: number;
    mk_kode: string;
    nama_mk: string;
    sks: number;
    jadwal_id: number;
    jam_mulai: string;
    jam_selesai: string;
    nama_kelas: string;
    hari: string;
    ada_responsi: string;
    dosen: string;
    gelar: string;
    tambahan: string;
  }
  
  interface MataKuliahResponse {
    status: string;
    data: MataKuliah[][];
    code: number;
}