export type TahunKHS = {
    tahunid: string;
  };
  
  export type TahunKHSResponse = {
    status: string;
    data: TahunKHS[][]; // Data dalam bentuk array dalam array
    code: number;
  };
  