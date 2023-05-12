export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${input}?api_key=161a90d5311a80fc15c2a62eb7a63f64`,
    init
  );
  const result = await data.json();

  return result as T;
}
