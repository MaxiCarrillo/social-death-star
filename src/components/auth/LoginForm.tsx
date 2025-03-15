"use client";

import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SubmitButton } from "../form/SubmitButton";
import { InputText } from "../form/InputText";

type FormData = {
    username: string;
    password: string;
}

const schema = yup.object({
    username: yup.string().required("El usuario es obligatorio"),
    password: yup.string().required("La contraseña es obligatoria")
}).required();

export const LoginForm = () => {

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
                <SubmitButton label="Iniciar Sesión" />
            </form>
        </FormProvider>
    )
}
