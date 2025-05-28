import React from "react";
import ErrorMessage from "./ErrorMessege";
import type { Props, State } from "./ErrorBoundaryTypes";

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMsg: error.message };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  handleReset() {
    this.setState({ hasError: false, errorMsg: "" });
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center">
            <ErrorMessage error={this.state.errorMsg} />
            <button onClick={() => this.handleReset()}>Try Again</button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
