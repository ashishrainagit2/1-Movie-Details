import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class ErrorPage extends React.Component {

    render(){
        const rnd = Math.random();

        if ( rnd > 0.3 ) {
            throw new Error( 'Something went wrong' );
        }
        return (
            <ErrorBoundary>
                <p>I am a  error page that will throw error with 70% probability</p>
            </ErrorBoundary>
            
        )
    }

}

export default ErrorPage;