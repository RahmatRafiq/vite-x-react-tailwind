interface Nilai {
    mk_kode: string;
    nama: string;
    sks: number;
    tugas1: number;
    tugas2: number;
    tugas3: number;
    v_presensi: number;
    n_presensi: number;
    uts: number;
    uas: number;
    nilai_akhir: number;
}

interface NilaiResponse {
    status: string;
    data: Nilai[][];
    code: number;
} 
