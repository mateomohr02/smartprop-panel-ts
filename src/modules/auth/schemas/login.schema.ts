import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo electrónico es obligatorio")
    .email("El formato del correo electrónico no es válido")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(1, "La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .max(20, "La contraseña no puede superar los 20 caracteres")
    .trim(),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;