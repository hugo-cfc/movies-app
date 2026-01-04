export async function fetchWrapper<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL environment variable");
  }

  const token = process.env.TMDB_API_TOKEN;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  let url: URL;
  if (input instanceof URL) {
    url = new URL(input.toString());
  } else if (typeof input === "string") {
    url = new URL(input.replace(/^\//, ""), normalizedBaseUrl);
  } else if (input instanceof Request) {
    url = new URL(input.url);
  } else {
    throw new Error("Unsupported fetch input type");
  }
  url.searchParams.set("language", "pt-BR");
  url.searchParams.set("region", "BR");

  if (!token && apiKey) {
    url.searchParams.set("api_key", apiKey);
  }

  const headers = new Headers(init?.headers);
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  const data = await fetch(url, {
    ...init,
    headers,
  });
  const result = await data.json();

  return result as T;
}
