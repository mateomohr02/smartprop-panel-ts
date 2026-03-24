"use client";

import { useForm, Controller } from "react-hook-form";
import { LoginSchemaType } from "../schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../schemas/login.schema";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { loginAction } from "../actions/login.action";

const LoginForm = () => {
  const loginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      await loginAction(data);
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={loginForm.handleSubmit(onSubmit)}
      className="w-full h-full max-w-56 "
    >
      <FieldGroup>
        <Controller
          name="email"
          control={loginForm.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="login-email">Correo Electrónico</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="usuario@gmail.com"
                autoComplete="off"
                className="w-32"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={loginForm.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="login-password">Contraseña</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="usuario@gmail.com"
                autoComplete="off"
                className="w-32"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button variant="actionButton" type="submit">
        {" "}
        Iniciar Sesión
      </Button>
    </form>
  );
};

export default LoginForm;
