import { Component } from "react";


class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = { error: false }
    }

    static getDerivedStateFromError() {
        return { error: true };
    }

    render() {
        if (!this.state.error) return this.props.children
        else return <p style={{ color: "red" }}>Something went wrong</p>
    }
}

export default ErrorBoundary;