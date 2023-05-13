export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${input}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    init
  );
  const result = await data.json();

  return result as T;
}
