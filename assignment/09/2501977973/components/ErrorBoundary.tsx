import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Terjadi kesalahan. Silakan muat ulang halaman.</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;