// lib/api/action-client.ts
"use server";

import { env } from "@/config/env";
import { cookies } from "next/headers";

type ApiOptions<T> = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: T;
  headers?: HeadersInit;
};

export async function apiAction<TResponse, TBody = unknown>(
  endpoint: string,
  options: ApiOptions<TBody> = {}
): Promise<TResponse> {
  const { method = "GET", body, headers } = options;

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  let res = await fetch(`${env.api_url}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && {
        Authorization: `Bearer ${accessToken}`,
      }),
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });

  // 🔁 Si expiró el access token → refresh automático
  if (res.status === 401 && refreshToken) {
    const refreshRes = await fetch(
      `${process.env.API_URL}/auth/refresh`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      }
    );

    if (!refreshRes.ok) {
      throw new Error("Session expired. Please login again.");
    }

    const { accessToken: newAccessToken } = await refreshRes.json();

    // guardamos nuevo access token
    cookieStore.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: true,
    });

    // 🔁 retry request original
    res = await fetch(`${process.env.API_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${newAccessToken}`,
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    });
  }

  if (!res.ok) {
    const error = await safeParseError(res);
    throw new Error(error);
  }

  return res.json();
}

async function safeParseError(res: Response) {
  try {
    const data = await res.json();
    return data.message || "API Error";
  } catch {
    return "API Error";
  }
}