"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { InputText } from "../form/InputText";
import { SubmitButton } from "../form/SubmitButton";

type FormData = {
    username: string;
    password: string;
    name: string;
    photoUrl: string;
}

const schema = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria"),
    name: yup.string().required("El nombre es obligatorio"),
    photoUrl: yup.string().url("La foto de perfil debe ser una URL válida").required("La foto de perfil es obligatoria")
}).required();

export const RegisterForm = () => {

    const methods = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: FormData) => {
        console
            .log(data);
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
            </form>
        </FormProvider>
    )
}
