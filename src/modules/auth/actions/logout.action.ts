// app/(auth)/actions/logout.action.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const cookieStore = await cookies();

  // ❌ eliminar cookies
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  // 🚀 redirigir
  redirect("/login");
}