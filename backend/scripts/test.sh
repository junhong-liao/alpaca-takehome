#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting test suite..."

# Activate virtual environment if not already activated
if [[ -z "${VIRTUAL_ENV}" ]]; then
    echo "📦 Activating virtual environment..."
    source alpaca_venv/bin/activate
fi

# Install dependencies if needed
echo "📦 Checking dependencies..."
pip install -r requirements.txt

# Run the tests
echo "🧪 Running tests..."
pytest \
    --verbose \
    --cov=app \
    --cov-report=term-missing \
    --cov-report=html:coverage_report \
    tests/

# Show test coverage report
echo "📊 Coverage report generated in coverage_report/index.html"

# Run API health check if server is running
if curl -s http://localhost:8003/health > /dev/null; then
    echo "✅ API health check passed"
else
    echo "⚠️  API health check failed - server might not be running"
fi

echo "✨ Test suite completed" 