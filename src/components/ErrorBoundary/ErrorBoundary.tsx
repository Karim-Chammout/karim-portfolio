import { Component, ReactNode } from 'react';

import Button from '../button';
import { Content, Wrapper } from './ErrorBoundary.style';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Wrapper>
          <Content>
            <h1>Oh no! Something went wrong trying to load this page.</h1>
            <Button text="Reload" onClick={() => window.location.reload()} />
          </Content>
        </Wrapper>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
