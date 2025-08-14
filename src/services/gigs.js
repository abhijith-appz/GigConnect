import api from './api'; // tumhare axios instance
export async function fetchGigs(params = {}) {
  const search = new URLSearchParams(params).toString();
  const { data } = await api.get(`/gigs?${search}`);
  return data; // {items:[], page, total, pageSize}
}
