export interface Mahasiswa {
    id?: number; // opsional, jika backend mengirimkan id
    mhsw_id: string;
    nama: string;
    program_id: string;
    prodi_id: string;
    alamat: string;
    negara: string;
    handphone: string;
    email: string;
    nama_ibu: string;
    agama_id: string;
    tgl_sk_penyetaraan: string | null;
    user_id?: number;
    user?: UserRequest | null;
}

export interface UserRequest {
    email: string;
    password?: string;
}

// Sesuaikan tipe response dari API getMahasiswa
export interface MahasiswaUserResponse {
    status: string;
    item: Mahasiswa;
    code: number;
}
