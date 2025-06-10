#!/bin/bash

# MCP Servers 시작 스크립트
echo "Starting MCP Servers..."

# Check if gnome-terminal is available
if command -v gnome-terminal &> /dev/null; then
    echo "Using gnome-terminal to open new tabs..."
    
    # Sequential Thinking MCP Server
    gnome-terminal --tab --title="Sequential Thinking MCP" -- bash -c "
        echo 'Starting Sequential Thinking MCP Server...';
        docker build -t mcp/sequentialthinking -f src/sequentialthinking/Dockerfile .;
        echo 'Sequential Thinking MCP Server started. Press any key to close.';
        read
    "
elif command -v tmux &> /dev/null; then
    echo "Using tmux to create new sessions..."
    
    # Create tmux session for Sequential Thinking MCP
    tmux new-session -d -s sequential_thinking "docker build -t mcp/sequentialthinking -f src/sequentialthinking/Dockerfile ."

    
    echo "Created tmux sessions:"
    echo "  - sequential_thinking: tmux attach -t sequential_thinking"
    
else
    echo "Running commands in background processes..."
    echo "Note: Check process status with 'ps aux | grep mcp'"
    
    # Run in background
    echo "Starting Sequential Thinking MCP Server..."
    docker build -t mcp/sequentialthinking -f src/sequentialthinking/Dockerfile . &
    SEQUENTIAL_PID=$!
    
    echo "Background processes started:"
    echo "  - Sequential Thinking MCP: PID $SEQUENTIAL_PID"
    
    echo "To stop all processes, run: kill $SEQUENTIAL_PID $SERVER_PID $MCP_PID"
fi

echo "All MCP servers are starting up..." 