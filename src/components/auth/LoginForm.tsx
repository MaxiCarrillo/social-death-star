"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SubmitButton } from "../form/SubmitButton";
import { InputText } from "../form/InputText";
import authAPI from "@/services/auth/auth.api";
import { AccessDeniedError } from "@/services/common/http.errors";
import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
    username: string;
    password: string;
}

const schema = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria")
}).required();

export const LoginForm = () => {

    const router = useRouter();
    const [serverError, setServerError] = useState<string | null>(null);

    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const { handleSubmit } = methods;

    const onSubmit = async (data: FormData) => {
        setServerError(null);
        try {
            const loginResponse = await authAPI.login(data.username, data.password);
            console.log(JSON.stringify(loginResponse));
            router.push("/");
        } catch (error) {
            if (error instanceof AccessDeniedError) {
                setServerError("Usuario o contraseña incorrectos");
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
                <SubmitButton label="Iniciar Sesión" />
                {
                    serverError &&
                    <div className="text-red-500 mt-2" >{serverError}</div>
                }

            </form>
        </FormProvider>
    )
}
