import { FallbackProps } from "react-error-boundary";

export const ErrorFallback=({error, resetErrorBoundary}:FallbackProps)=>{
    return (
        <div role="alert">
            <p>something went wrong:</p>
            <pre>{error.massage}</pre>
            <button onClick={resetErrorBoundary}>try again</button>
        </div>
    )
}