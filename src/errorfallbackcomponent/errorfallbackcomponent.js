import {ErrorBoundary} from 'react-error-boundary';

export function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

export function myErrorHandler (error, info) {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log(`Some Went Wrong ${error} ${info}`);
}


