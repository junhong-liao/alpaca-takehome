#!/bin/bash

# Exit on error
set -e

echo "Running tests..."
# Run pytest with coverage and output
pytest --cov=app tests/ -v --cov-report=term-missing

echo "Tests completed." 