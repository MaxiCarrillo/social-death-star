import React from 'react'
import { FieldValues, useFormContext } from 'react-hook-form'

interface InputTextProps {
    id: string;
    type: string;
    label: string;
    fieldName: string;
    placeholder: string;
    styles?: string;
}

export const InputText = ({ styles, fieldName, label, placeholder, type, id }: InputTextProps) => {

    const { register, formState: { errors } } = useFormContext();

    return (
        <div className={`${styles}`}>
            <label htmlFor="username" className="flex flex-col gap-1">
                {label}
                <input
                    {...register(fieldName)}
                    id={id}
                    type={type}
                    placeholder={placeholder || ""}
                    className="px-2 py-1 rounded-md text-foreground text-gray-800"
                />
            </label>
            {errors && errors[fieldName] && <p className="text-red-500">
                {errors[fieldName]?.message && String(errors[fieldName].message)}
            </p>}
        </div>
    )
}
