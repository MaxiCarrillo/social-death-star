type RepliesCounterProps = {
    count: number;
    onClick?: () => void;
}

export const RepliesCounter = ({ count, onClick }: RepliesCounterProps) => {

    if (count === 0) return <p className="link-primary cursor-pointer" onClick={onClick}>
        Se el primero en responder
    </p>

    const label = (count > 1) ? "respuestas" : "respuesta";

    return (
        <p className="link-primary cursor-pointer" onClick={onClick}>
            {count} {label}
        </p>
    )
}
