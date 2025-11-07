export async function fetchTasks<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network error');
  return res.json() as Promise<T>;
}