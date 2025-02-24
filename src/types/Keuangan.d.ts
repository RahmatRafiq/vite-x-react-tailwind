interface KeuanganDetail {
    nama: string;
    jumlah: number;
    besar: number;
    dibayar: number;
    tunggakan: number;
} 

interface KeuanganDetailResponse {
    status: string;
    data: KeuanganDetail[][];
    code: number;
}


interface KeuanganKhs {
    tahunid: string;
    sesi: number;
    sks: number;
    ips: number;
    biaya: number;
    potongan: number;
    bayar: number;
    tarik: number;
} 

interface KeuanganKhsResponse {
    status: string;
    data: KeuanganKhs[][];
    code: number;
}