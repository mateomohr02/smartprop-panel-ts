import { env } from "@/config/env";

export async function FETCH<T>(
  endpoint: string,
  options?: RequestInit,
  cache?: RequestCache
): Promise<T> {
  const res = await fetch(`${env.api_url}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    cache: cache ?? "no-store",
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
}