import { useState } from 'react'

export default function APIShowcase() {
  const [selectedTool, setSelectedTool] = useState('github')

  const curlCommands = {
    github: `curl -X POST https://api.openui.dev/v1/chat \\
  -H "Authorization: Bearer $OPENUI_API_KEY" \\
  -d '{
    "message": "Review the latest PR on main",
    "tools": ["github-reviewer"]
  }'`,
    mcp: `curl -X POST https://api.openui.dev/v1/chat \\
  -H "Authorization: Bearer $OPENUI_API_KEY" \\
  -d '{
    "message": "Write test output to sandbox",
    "tools": ["filesystem"]
  }'`
  }

  const jsonResponses = {
    github: `{
  "status": "success",
  "task_id": "review_9f84a1",
  "result": {
    "pr_number": 128,
    "reviewed_files": 4,
    "comments_posted": 2
  }
}`,
    mcp: `{
  "status": "success",
  "task_id": "mcp_write_0f8b",
  "result": {
    "tool_executed": "filesystem:write_file",
    "file_path": "./sandbox/tests/log.txt",
    "bytes_written": 248
  }
}`
  }

  return (
    <div className="api-showcase-widget">
      <div className="api-header">
        <p className="widget-label font-mono">Developer API Reference</p>
        <div className="api-tabs">
          <button
            onClick={() => setSelectedTool('github')}
            className={`api-tab-btn font-mono ${selectedTool === 'github' ? 'active' : ''}`}
          >
            GitHub Reviewer
          </button>
          <button
            onClick={() => setSelectedTool('mcp')}
            className={`api-tab-btn font-mono ${selectedTool === 'mcp' ? 'active' : ''}`}
          >
            MCP Filesystem
          </button>
        </div>
      </div>

      <div className="api-body font-mono">
        <div className="request-pane">
          <p className="pane-title">HTTP REQUEST (curl)</p>
          <pre><code>{curlCommands[selectedTool]}</code></pre>
        </div>
        <div className="response-pane">
          <p className="pane-title">HTTP RESPONSE (200 OK)</p>
          <pre><code>{jsonResponses[selectedTool]}</code></pre>
        </div>
      </div>
    </div>
  )
}
