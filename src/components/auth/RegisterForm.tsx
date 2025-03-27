"use client";

import RegisterScheme from "@/schemes/register.scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { InputText } from "../form/InputText";
import { SubmitButton } from "../form/SubmitButton";
import { ConflictError } from "@/services/common/http.errors";
import authAPI from "@/services/auth/auth.api";

type FormData = {
    username: string;
    password: string;
    name: string;
    photoUrl: string;
}

export const RegisterForm = () => {

    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);

    const methods = useForm<FormData>({
        resolver: yupResolver(RegisterScheme)
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data: FormData) => {
        setServerError(null);
        try {
            const loginResponse = await authAPI.registerInternal(
                data.username,
                data.password,
                data.name,
                data.photoUrl
            );
            console.log(JSON.stringify(loginResponse));
            router.push("/");
            router.refresh();
        } catch (error) {
            if (error instanceof ConflictError) {
                setServerError(`El usuario ${data.username} ya existe`);
            } else {
                setServerError("Error en el servidor");
            }
        }
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputText
                    id="username"
                    label="Usuario"
                    fieldName="username"
                    placeholder="Anakin Skywalker"
                    type="text"
                />
                <InputText
                    id="password"
                    label="Contraseña"
                    fieldName="password"
                    placeholder="Password"
                    type="password"
                />
                <InputText
                    id="name"
                    label="Nombre"
                    fieldName="name"
                    placeholder="Anakin Skywalker"
                    type="text"
                />
                <InputText
                    id="photoUrl"
                    label="Foto de perfil"
                    fieldName="photoUrl"
                    placeholder="https://example.com/photo.jpg"
                    type="text"
                />
                <SubmitButton label="Crear cuenta" />
                {
                    serverError &&
                    <div className="text-red-500 mt-2" >{serverError}</div>
                }
            </form>
        </FormProvider>
    )
}
