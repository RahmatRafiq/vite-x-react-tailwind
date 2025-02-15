export type TahunKHS = {
    tahunid: string;
};

export type TahunKHSResponse = {
    status: string;
    data: TahunKHS[][]; // Data dalam bentuk array dalam array
    code: number;
};
export type JadwalKuliah = {
    hari: string;
    mataKuliah: string;
    ruangan: string;
    jam: string;
    dosen: string;
};