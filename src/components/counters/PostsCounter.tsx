
type PostsCounterProps = {
    count: number;
}

export const PostsCounter = ({ count }: PostsCounterProps) => {

    const label = count > 1 ? "posteos" : "posteo";

    return (
        <p>
            {count} {label}
        </p>
    )
}
