export type TahunKHS = {
  tahunid: string;
};

export type TahunKHSResponse = {
  status: string;
  data: TahunKHS[]; // Data dalam bentuk array dalam array
  code: number;
};

type StatusKrs = {
  khs_id: string;
  status_mahasiswa: string;
};

type StatusKrsResponse = {
  status: string;
  data: StatusKrs[][];
  code: number;
};
interface JadwalKuliahResponse {
  status: string;
  data: JadwalKuliah[][];
  code: number;
}

interface JadwalKuliah {
  jadwal_id: number;
  mk_nama: string;
  hari_id: number;
  nama_kelas: string;
  jam_mulai: string;
  jam_selesai: string;
  ruang_id: string;
  dsn: string;
}