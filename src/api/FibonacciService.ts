import request from "../utils/request";

export interface Spiral {
  rows: number[][],
  ts: number
}

const getSpiral = async (rows: number, cols: number): Promise<Spiral> => {
  try {
    const resp = await request.get<Spiral>(`/spiral`, {
      params: { rows, cols }
    });

    return resp.data;
  } catch(ex) {
    throw ex;
  }
};

const FibonacciService = {
  getSpiral,
};

export default FibonacciService;