import { useFormContext } from "react-hook-form";

interface SubmitButtonProps {
    styles?: string;
    label: string;
}

export const SubmitButton = ({ styles, label }: SubmitButtonProps) => {
    
    return (
        <button
            type="submit"
            className={`button-primary ${styles}`}
        >
            {label}
        </button>
    )
}
