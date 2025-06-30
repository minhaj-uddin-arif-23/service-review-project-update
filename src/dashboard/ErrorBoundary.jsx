/* eslint-disable react/prop-types */
import { Component } from "react";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50 text-white">
          <h1 className="text-2xl font-semibold mb-4">Something went wrong</h1>
          <p className="text-white text-opacity-80 mb-6">{this.state.error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}