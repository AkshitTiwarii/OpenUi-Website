// ══════════════════ SIDEBAR NAVIGATION ══════════════════

export const sidebarNav = [
  {
    title: 'Overview',
    items: [
      { label: 'What is OpenUI', id: 'what-is-openui' },
      { label: 'Why OpenUI', id: 'why-openui' },
      { label: 'Architecture', id: 'architecture' },
    ],
  },
  {
    title: 'AI Core',
    items: [
      { label: 'Model Routing', id: 'model-routing' },
      { label: 'Cloud First', id: 'cloud-first' },
      { label: 'Conversation Memory', id: 'conversation-memory' },
      { label: 'Streaming Responses', id: 'streaming-responses' },
    ],
  },
  {
    title: 'Voice AI',
    items: [
      { label: 'Push-to-talk', id: 'push-to-talk' },
      { label: 'Whisper Transcription', id: 'whisper-transcription' },
      { label: 'Voice Conversations', id: 'voice-conversations' },
      { label: 'Real-time Audio', id: 'real-time-audio' },
    ],
  },
  {
    title: 'Vision',
    items: [
      { label: 'Screen Understanding', id: 'screen-understanding' },
      { label: 'OCR', id: 'ocr' },
      { label: 'Claude Vision', id: 'claude-vision' },
      { label: 'Desktop Analysis', id: 'desktop-analysis' },
    ],
  },
  {
    title: 'Desktop Automation',
    items: [
      { label: 'Mouse Control', id: 'mouse-control' },
      { label: 'Keyboard Control', id: 'keyboard-control' },
      { label: 'Open Applications', id: 'open-applications' },
      { label: 'Calendar', id: 'calendar' },
      { label: 'File Search', id: 'file-search' },
    ],
  },
  {
    title: 'Developer Tools',
    items: [
      { label: 'GitHub PR Review', id: 'github-pr-review' },
      { label: 'Autonomous Coding', id: 'autonomous-coding' },
      { label: 'Figma Integration', id: 'figma-integration' },
      { label: 'MCP Integration', id: 'mcp-integration' },
    ],
  },
  {
    title: 'AI Experiences',
    items: [
      { label: 'AI Interviewer', id: 'ai-interviewer' },
      { label: 'Team Workspaces', id: 'team-workspaces' },
      { label: 'Shared Memory', id: 'shared-memory' },
    ],
  },
  {
    title: 'Platform',
    items: [
      { label: 'Authentication', id: 'authentication' },
      { label: 'Subscription System', id: 'subscription-system' },
      { label: 'Usage Limits', id: 'usage-limits' },
      { label: 'Billing', id: 'billing' },
    ],
  },
  {
    title: 'Security',
    items: [
      { label: 'Privacy', id: 'privacy' },
      { label: 'Local Processing', id: 'local-processing' },
      { label: 'Cloud Security', id: 'cloud-security' },
      { label: 'Permission System', id: 'permission-system' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { label: 'Electron Architecture', id: 'electron-architecture' },
      { label: 'React Renderer', id: 'react-renderer' },
      { label: 'IPC Communication', id: 'ipc-communication' },
      { label: 'Tool Execution', id: 'tool-execution' },
      { label: 'APIs', id: 'apis' },
    ],
  },
  {
    title: 'FAQ',
    items: [
      { label: 'Platform FAQ', id: 'platform-faq' },
    ],
  },
]

// ══════════════════ SECTION CONTENT ══════════════════

export const platformSections = [
  // ─── OVERVIEW ───
  {
    id: 'what-is-openui',
    category: 'Overview',
    title: 'What is OpenUI',
    description: `OpenUI is an AI-powered desktop assistant that lives in your menu bar. It talks, types, clicks, codes, books meetings, reviews pull requests, and automates your entire operating system — all through natural language. Built on Electron, it runs natively on macOS and Windows with first-class support for both local and cloud AI models.`,
    layout: 'text-left',
    features: [
      {
        icon: 'cpu',
        title: 'AI-Native Desktop App',
        description: 'A genuine agent that reads your screen, holds context across sessions, and takes action on your behalf. Not a chat wrapper — a real operating system layer.',
      },
      {
        icon: 'globe',
        title: 'Cloud + Local Models',
        description: 'Route between Claude Sonnet, GPT-4o, and local Ollama models depending on your tier, task complexity, and privacy preferences.',
      },
      {
        icon: 'shield',
        title: 'Privacy First',
        description: 'Nothing leaves your machine without consent. Local Whisper transcription, on-device OCR, and encrypted cloud connections when you opt in.',
      },
      {
        icon: 'layers',
        title: 'Cross-Platform',
        description: 'Universal binary for Apple Silicon and Intel Macs. NSIS installer for Windows x64 and ia32. Same experience everywhere.',
      },
    ],
    callout: {
      type: 'info',
      text: 'OpenUI is currently in early access. Download the free tier to get started with 20 AI messages per day — no account required.',
    },
  },
  {
    id: 'why-openui',
    category: 'Overview',
    title: 'Why OpenUI',
    description: `Most AI tools are confined to a browser tab. They can't see your screen, move your mouse, or interact with your file system. OpenUI bridges that gap — it's an AI that actually operates your computer, not just responds to prompts.`,
    layout: 'text-right',
    features: [
      {
        icon: 'zap',
        title: 'Beyond Chat',
        description: 'OpenUI doesn\'t just answer questions — it takes action. Open apps, fill forms, write code, book meetings, and review pull requests autonomously.',
      },
      {
        icon: 'eye',
        title: 'Screen Awareness',
        description: 'Read any content on screen via OCR or cloud vision. The AI understands what you\'re looking at and can act on it contextually.',
      },
      {
        icon: 'mic',
        title: 'Voice-First',
        description: 'Push-to-talk or always-on voice mode with local Whisper transcription. No cloud API needed for basic voice input.',
      },
      {
        icon: 'code',
        title: 'Developer Workflows',
        description: 'GitHub PR reviews, autonomous background coding, Figma design analysis, and MCP tool integration — built for developers.',
      },
    ],
  },
  {
    id: 'architecture',
    category: 'Overview',
    title: 'Architecture',
    description: `OpenUI is built on Electron with a clean separation between the main process (system access, AI routing, tool execution) and the renderer (React UI). All communication flows through validated IPC channels with context isolation enabled.`,
    layout: 'text-left',
    showArchitectureDiagram: true,
    codeSnippet: {
      language: 'text',
      title: 'Process Architecture',
      code: `┌─────────────────────────────────────────────┐
│                  Electron                    │
│  ┌──────────────┐    ┌───────────────────┐  │
│  │ Main Process │    │    Renderer       │  │
│  │              │◄──►│   (React UI)      │  │
│  │  • AI Router │IPC │   • Chat View     │  │
│  │  • Tools     │    │   • Settings      │  │
│  │  • System    │    │   • Waveform      │  │
│  └──────┬───────┘    └───────────────────┘  │
│         │                                    │
│  ┌──────▼───────┐    ┌───────────────────┐  │
│  │  Cloud AI    │    │  Desktop Tools    │  │
│  │  • Claude    │    │  • PyAutoGUI      │  │
│  │  • GPT-4o    │    │  • AppleScript    │  │
│  │  • Ollama    │    │  • PowerShell     │  │
│  └──────────────┘    └───────────────────┘  │
└─────────────────────────────────────────────┘`,
    },
  },

  // ─── AI CORE ───
  {
    id: 'model-routing',
    category: 'AI Core',
    title: 'Model Routing',
    description: `OpenUI intelligently routes requests between cloud models and optional local models based on user tier, task complexity, and latency requirements. Free tier users get Claude Haiku for fast responses. Pro users unlock Claude Sonnet and GPT-4o for complex reasoning tasks.`,
    layout: 'text-right',
    features: [
      {
        icon: 'route',
        title: 'Intelligent Selection',
        description: 'The router analyzes each request and selects the optimal model. Simple queries go to fast models; complex reasoning goes to powerful ones.',
      },
      {
        icon: 'gauge',
        title: 'Tier-Based Access',
        description: 'Free users get Claude Haiku. Pro users get Claude Sonnet and GPT-4o. Enterprise users get dedicated model instances.',
      },
      {
        icon: 'shuffle',
        title: 'Fallback Logic',
        description: 'If a cloud model is unavailable, the router automatically falls back to an alternative model or local Ollama instance.',
      },
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Model Router Logic',
      code: `// Simplified model routing
async function routeRequest(message, userTier) {
  const complexity = analyzeComplexity(message);
  
  if (userTier === 'free') {
    return await callModel('claude-haiku', message);
  }
  
  if (complexity > 0.7) {
    return await callModel('claude-sonnet', message);
  }
  
  return await callModel('gpt-4o-mini', message);
}`,
    },
    callout: {
      type: 'tip',
      text: 'Pro users can pin a preferred model in settings. The router will always use your pinned model when available.',
    },
  },
  {
    id: 'cloud-first',
    category: 'AI Core',
    title: 'Cloud First',
    description: `OpenUI is designed cloud-first for the best AI experience, with cloud models providing superior reasoning, larger context windows, and faster iteration. Local models via Ollama are available as an optional privacy-focused alternative.`,
    layout: 'text-left',
    features: [
      {
        icon: 'cloud',
        title: 'Managed Infrastructure',
        description: 'No API keys to manage on the free tier. OpenUI handles authentication, rate limiting, and model selection automatically.',
      },
      {
        icon: 'lock',
        title: 'Secure Connections',
        description: 'All cloud API calls use TLS 1.3 encryption. API keys are stored in the OS keychain, never in plaintext config files.',
      },
      {
        icon: 'server',
        title: 'Optional Local Models',
        description: 'Install Ollama and point OpenUI at your local endpoint for fully offline operation. No data leaves your machine.',
      },
    ],
  },
  {
    id: 'conversation-memory',
    category: 'AI Core',
    title: 'Conversation Memory',
    description: `OpenUI maintains conversation context across sessions. The AI remembers what you discussed, what files you worked on, and what tasks are pending. Pro users get extended memory with longer context windows.`,
    layout: 'text-right',
    features: [
      {
        icon: 'brain',
        title: 'Session Persistence',
        description: 'Conversations are saved locally and can be resumed at any time. The AI picks up exactly where you left off.',
      },
      {
        icon: 'clock',
        title: 'Context Window Management',
        description: 'Intelligent truncation keeps the most relevant context in the window. Recent messages and referenced files are always prioritized.',
      },
      {
        icon: 'database',
        title: 'Searchable History',
        description: 'Full-text search across all past conversations. Find that code snippet or command from last week instantly.',
      },
    ],
  },
  {
    id: 'streaming-responses',
    category: 'AI Core',
    title: 'Streaming Responses',
    description: `All AI responses stream in real-time via Server-Sent Events. You see tokens as they're generated — no waiting for the full response. Code blocks, markdown, and tool calls are rendered progressively.`,
    layout: 'text-left',
    features: [
      {
        icon: 'stream',
        title: 'Token-by-Token',
        description: 'Responses appear character by character for a natural conversational feel. Average first-token latency under 300ms on Pro.',
      },
      {
        icon: 'code',
        title: 'Progressive Rendering',
        description: 'Code blocks get syntax highlighting as they stream. Markdown is rendered incrementally. Tool calls execute as soon as they\'re complete.',
      },
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Streaming Handler',
      code: `// Stream tokens from the AI model
const stream = await ai.chat.stream({
  model: 'claude-sonnet',
  messages: conversationHistory,
});

for await (const chunk of stream) {
  // Render each token as it arrives
  appendToChat(chunk.delta);
  
  // Execute tool calls immediately
  if (chunk.toolCall) {
    await executeTool(chunk.toolCall);
  }
}`,
    },
  },

  // ─── VOICE AI ───
  {
    id: 'push-to-talk',
    category: 'Voice AI',
    title: 'Push-to-talk',
    description: `Press a global hotkey from anywhere on your desktop to start talking to OpenUI. The AI listens, transcribes locally via Whisper, processes your request, and responds with text or speech. No browser tab, no app switching — just talk.`,
    layout: 'text-right',
    features: [
      {
        icon: 'mic',
        title: 'Global Hotkey',
        description: 'Ctrl+Alt+O (customizable) activates listening from any application. The menu bar icon pulses to show recording state.',
      },
      {
        icon: 'waveform',
        title: 'Real-time Waveform',
        description: 'A live audio waveform visualization shows your voice input in real-time, confirming the microphone is active.',
      },
      {
        icon: 'zap',
        title: 'Instant Processing',
        description: 'As soon as you stop speaking, Whisper transcribes and the AI begins processing. Typical end-to-end latency is under 2 seconds.',
      },
    ],
    callout: {
      type: 'tip',
      text: 'You can customize the push-to-talk hotkey in Settings → Voice → Hotkey. Set it to any key combination that works for your workflow.',
    },
  },
  {
    id: 'whisper-transcription',
    category: 'Voice AI',
    title: 'Whisper Transcription',
    description: `OpenUI uses OpenAI's Whisper model running locally on your machine for speech-to-text. No audio data is ever sent to the cloud for transcription — everything happens on-device with support for 99+ languages.`,
    layout: 'text-left',
    features: [
      {
        icon: 'shield',
        title: 'Fully Local',
        description: 'Whisper runs on your CPU/GPU. Audio never leaves your machine. No API key required for transcription.',
      },
      {
        icon: 'globe',
        title: '99+ Languages',
        description: 'Whisper supports transcription and translation across 99 languages with automatic language detection.',
      },
      {
        icon: 'gauge',
        title: 'Multiple Model Sizes',
        description: 'Choose from tiny (fastest) to large (most accurate) Whisper models based on your hardware and accuracy needs.',
      },
    ],
    codeSnippet: {
      language: 'python',
      title: 'Whisper Integration',
      code: `# Local Whisper transcription
import whisper

model = whisper.load_model("base")

def transcribe_audio(audio_path):
    result = model.transcribe(
        audio_path,
        language=None,  # auto-detect
        fp16=False
    )
    return result["text"]`,
    },
  },
  {
    id: 'voice-conversations',
    category: 'Voice AI',
    title: 'Voice Conversations',
    description: `OpenUI supports full voice conversations with AI-generated speech responses. The AI speaks back to you through your system audio, creating a natural conversational experience similar to a phone call.`,
    layout: 'text-right',
    features: [
      {
        icon: 'speaker',
        title: 'Text-to-Speech',
        description: 'AI responses are converted to natural-sounding speech and played through your system audio output.',
      },
      {
        icon: 'loop',
        title: 'Continuous Mode',
        description: 'Enable always-on mode for hands-free conversations. The AI listens continuously and responds when you pause speaking.',
      },
    ],
  },
  {
    id: 'real-time-audio',
    category: 'Voice AI',
    title: 'Real-time Audio',
    description: `The audio pipeline is optimized for minimal latency. Voice input is captured at 16kHz, processed through a ring buffer, and sent to Whisper in chunks. Silence detection automatically determines when you've finished speaking.`,
    layout: 'text-left',
    features: [
      {
        icon: 'waveform',
        title: 'Ring Buffer',
        description: 'Audio is captured into a ring buffer for efficient memory usage. Only the active speech segment is sent to the transcription model.',
      },
      {
        icon: 'settings',
        title: 'Silence Detection',
        description: 'Voice Activity Detection (VAD) automatically stops recording after 1.5 seconds of silence. Threshold is configurable.',
      },
    ],
  },

  // ─── VISION ───
  {
    id: 'screen-understanding',
    category: 'Vision',
    title: 'Screen Understanding',
    description: `OpenUI can see and understand what's on your screen. It captures screenshots, analyzes them with Claude Vision or local OCR, and can identify UI elements, text, images, and interactive components with pixel-level coordinate detection.`,
    layout: 'text-right',
    features: [
      {
        icon: 'eye',
        title: 'Full Screen Capture',
        description: 'Capture the entire screen or a specific window. The AI analyzes the screenshot to understand layout, content, and interactive elements.',
      },
      {
        icon: 'target',
        title: 'Coordinate Detection',
        description: 'Identify the exact pixel coordinates of buttons, links, text fields, and other UI elements for precise automation.',
      },
      {
        icon: 'layers',
        title: 'Element Recognition',
        description: 'The vision model can identify menus, dialogs, form fields, tables, and other UI patterns across any application.',
      },
    ],
  },
  {
    id: 'ocr',
    category: 'Vision',
    title: 'OCR',
    description: `Tesseract OCR runs locally to extract text from any part of your screen. Use it to read error messages, copy text from images, or parse data from non-selectable UI elements — all without sending data to the cloud.`,
    layout: 'text-left',
    features: [
      {
        icon: 'text',
        title: 'Local Text Extraction',
        description: 'Tesseract OCR processes screenshots locally. Extract text from any application, image, or PDF without cloud dependency.',
      },
      {
        icon: 'crop',
        title: 'Region Selection',
        description: 'Capture a specific region of the screen for targeted OCR. Useful for reading error messages or data tables.',
      },
    ],
    codeSnippet: {
      language: 'python',
      title: 'OCR Pipeline',
      code: `# Local OCR with Tesseract
import pytesseract
from PIL import Image

def extract_text(screenshot_path, region=None):
    img = Image.open(screenshot_path)
    
    if region:
        img = img.crop(region)
    
    text = pytesseract.image_to_string(img)
    return text.strip()`,
    },
  },
  {
    id: 'claude-vision',
    category: 'Vision',
    title: 'Claude Vision',
    description: `Pro users can leverage Claude's vision capabilities for advanced screen understanding. Claude Vision goes beyond OCR — it understands context, layout hierarchy, design patterns, and can answer questions about what it sees.`,
    layout: 'text-right',
    features: [
      {
        icon: 'sparkle',
        title: 'Contextual Understanding',
        description: 'Claude Vision understands not just text, but the meaning of UI layouts. It can explain what an error dialog means or suggest next steps.',
      },
      {
        icon: 'palette',
        title: 'Design Analysis',
        description: 'Analyze design mockups, wireframes, and live applications. Get feedback on accessibility, layout issues, and design patterns.',
      },
    ],
    callout: {
      type: 'info',
      text: 'Claude Vision is available on Pro and Enterprise plans. Free tier uses local Tesseract OCR for text extraction.',
    },
  },
  {
    id: 'desktop-analysis',
    category: 'Vision',
    title: 'Desktop Analysis',
    description: `Combine screen capture, OCR, and vision models for comprehensive desktop analysis. OpenUI can watch your workflow, identify bottlenecks, suggest automation, and help you navigate complex multi-step processes across applications.`,
    layout: 'text-left',
    features: [
      {
        icon: 'scan',
        title: 'Workflow Analysis',
        description: 'The AI observes your screen interactions and suggests automation opportunities for repetitive tasks.',
      },
      {
        icon: 'monitor',
        title: 'Multi-Window Awareness',
        description: 'OpenUI can track context across multiple windows and applications, understanding how your workflow spans different tools.',
      },
    ],
  },

  // ─── DESKTOP AUTOMATION ───
  {
    id: 'mouse-control',
    category: 'Desktop Automation',
    title: 'Mouse Control',
    description: `OpenUI controls the mouse cursor to interact with any application on your desktop. It can click buttons, drag elements, scroll through pages, and navigate complex UIs — all based on natural language instructions or vision-guided coordinates.`,
    layout: 'text-right',
    features: [
      {
        icon: 'cursor',
        title: 'Precise Clicking',
        description: 'Click any UI element by name or coordinates. The vision system identifies the target and PyAutoGUI executes the click with pixel precision.',
      },
      {
        icon: 'move',
        title: 'Drag & Drop',
        description: 'Move files, rearrange UI elements, or drag selections. The AI plans the motion path and executes smooth cursor movements.',
      },
      {
        icon: 'scroll',
        title: 'Smart Scrolling',
        description: 'Scroll through pages, lists, and menus to find specific content. The AI reads the screen after each scroll to locate the target.',
      },
    ],
    codeSnippet: {
      language: 'python',
      title: 'Mouse Automation',
      code: `# PyAutoGUI mouse control
import pyautogui

def click_element(x, y, button='left'):
    pyautogui.moveTo(x, y, duration=0.3)
    pyautogui.click(x, y, button=button)

def drag_element(start, end):
    pyautogui.moveTo(*start, duration=0.2)
    pyautogui.drag(
        end[0] - start[0],
        end[1] - start[1],
        duration=0.5
    )`,
    },
  },
  {
    id: 'keyboard-control',
    category: 'Desktop Automation',
    title: 'Keyboard Control',
    description: `Type into any application, execute keyboard shortcuts, fill forms, and compose messages — all driven by AI. OpenUI supports complex key combinations, modifier keys, and multi-step keyboard sequences.`,
    layout: 'text-left',
    features: [
      {
        icon: 'keyboard',
        title: 'Natural Typing',
        description: 'Type text into any focused input field with natural keystroke timing. Supports special characters, Unicode, and multi-line input.',
      },
      {
        icon: 'shortcut',
        title: 'Keyboard Shortcuts',
        description: 'Execute any keyboard shortcut: Cmd+C, Ctrl+Alt+Del, or complex IDE shortcuts. The AI knows common shortcuts for popular applications.',
      },
    ],
  },
  {
    id: 'open-applications',
    category: 'Desktop Automation',
    title: 'Open Applications',
    description: `Launch any application, switch between windows, or bring specific apps to the foreground. On macOS, OpenUI uses AppleScript for native app control. On Windows, it uses PowerShell and COM automation.`,
    layout: 'text-right',
    features: [
      {
        icon: 'app',
        title: 'App Launcher',
        description: 'Say "open VS Code" or "launch Slack" and OpenUI finds and opens the application. It searches by name, bundle ID, or executable path.',
      },
      {
        icon: 'windows',
        title: 'Window Management',
        description: 'Switch between windows, minimize, maximize, or arrange apps side by side. Control window positions with natural language.',
      },
    ],
    codeSnippet: {
      language: 'applescript',
      title: 'macOS App Control',
      code: `-- Open application by name
tell application "Visual Studio Code"
    activate
end tell

-- Open a specific file
tell application "Finder"
    open POSIX file "/Users/you/project/index.js"
end tell`,
    },
  },
  {
    id: 'calendar',
    category: 'Desktop Automation',
    title: 'Calendar',
    description: `OpenUI integrates with your system calendar to create events, check availability, and manage your schedule through voice or text commands. On macOS, it interfaces directly with Calendar.app via AppleScript.`,
    layout: 'text-left',
    features: [
      {
        icon: 'calendar',
        title: 'Event Creation',
        description: '"Schedule a meeting with Design at 2pm tomorrow" — OpenUI creates the event with title, time, and optional notes.',
      },
      {
        icon: 'clock',
        title: 'Availability Check',
        description: 'Ask "am I free Thursday afternoon?" and OpenUI checks your calendar and reports your availability.',
      },
    ],
  },
  {
    id: 'file-search',
    category: 'Desktop Automation',
    title: 'File Search',
    description: `Search for files across your entire file system using natural language. OpenUI searches by name, content, file type, and modification date. On macOS, it leverages Spotlight. On Windows, it uses Everything or Windows Search.`,
    layout: 'text-right',
    features: [
      {
        icon: 'search',
        title: 'Natural Language Search',
        description: '"Find the PDF I downloaded yesterday about machine learning" — OpenUI searches by content, name, and metadata.',
      },
      {
        icon: 'folder',
        title: 'Smart Filtering',
        description: 'Filter by file type, date range, size, or containing folder. Results are ranked by relevance and recency.',
      },
    ],
  },

  // ─── DEVELOPER TOOLS ───
  {
    id: 'github-pr-review',
    category: 'Developer Tools',
    title: 'GitHub PR Review',
    description: `OpenUI can review GitHub pull requests autonomously. It fetches open PRs, reads the diff, understands the codebase context, writes a detailed review, and publishes comments — all without you opening a browser.`,
    layout: 'text-left',
    workflow: {
      title: 'PR Review Workflow',
      steps: [
        { label: 'Open PRs', description: 'Fetch open pull requests from GitHub API' },
        { label: 'Read Diff', description: 'Parse the code diff and understand changes' },
        { label: 'AI Review', description: 'Claude analyzes code quality, bugs, and improvements' },
        { label: 'Publish Comments', description: 'Post inline review comments on GitHub' },
      ],
    },
    features: [
      {
        icon: 'git',
        title: 'Automated Reviews',
        description: 'Point OpenUI at a repository and it will review all open PRs. Get detailed code review comments with suggestions and bug detection.',
      },
      {
        icon: 'message',
        title: 'Inline Comments',
        description: 'Reviews are posted as inline comments on specific lines of code, just like a human reviewer would do.',
      },
    ],
  },
  {
    id: 'autonomous-coding',
    category: 'Developer Tools',
    title: 'Autonomous Coding',
    description: `Go AFK and let OpenUI code for you. The agent reads your task list, writes code into a sandboxed workspace, runs your test suite, iterates on failures, and stops cleanly when all tests pass — up to 20 agentic turns per session.`,
    layout: 'text-right',
    workflow: {
      title: 'Autonomous Coding Loop',
      steps: [
        { label: 'Task Queue', description: 'Read pending tasks from your task list' },
        { label: 'Planning', description: 'Break down the task into implementation steps' },
        { label: 'Writing Code', description: 'Write code changes in a sandboxed workspace' },
        { label: 'Running Tests', description: 'Execute the test suite automatically' },
        { label: 'Fixing Errors', description: 'Analyze failures and iterate on the code' },
        { label: 'Repeat Until Success', description: 'Loop until all tests pass or max turns reached' },
      ],
    },
    features: [
      {
        icon: 'code',
        title: 'Sandboxed Execution',
        description: 'Code is written and tested in an isolated workspace. Nothing touches your main branch until you approve.',
      },
      {
        icon: 'refresh',
        title: 'Self-Correcting',
        description: 'When tests fail, the agent reads error output, adjusts the code, and tries again. Up to 20 iteration cycles per session.',
      },
    ],
    callout: {
      type: 'warning',
      text: 'Autonomous coding requires a Pro or Enterprise plan. Free tier users can use interactive coding assistance.',
    },
  },
  {
    id: 'figma-integration',
    category: 'Developer Tools',
    title: 'Figma Integration',
    description: `Import Figma designs into OpenUI for AI-powered analysis. The vision system reviews your designs for accessibility issues, layout problems, and suggests improvements — then comments directly in Figma.`,
    layout: 'text-left',
    workflow: {
      title: 'Figma Design Review',
      steps: [
        { label: 'Import Design', description: 'Fetch frames from Figma via API' },
        { label: 'Vision Analysis', description: 'Claude Vision analyzes the design' },
        { label: 'Accessibility Review', description: 'Check contrast, sizing, and WCAG compliance' },
        { label: 'Suggestions', description: 'Generate actionable improvement suggestions' },
        { label: 'Comment in Figma', description: 'Post comments directly on Figma frames' },
      ],
    },
    features: [
      {
        icon: 'palette',
        title: 'Design Analysis',
        description: 'AI reviews your Figma designs for visual consistency, accessibility issues, and responsive design patterns.',
      },
      {
        icon: 'message',
        title: 'Direct Feedback',
        description: 'Review comments are posted as Figma comments on specific frames, keeping feedback in context.',
      },
    ],
  },
  {
    id: 'mcp-integration',
    category: 'Developer Tools',
    title: 'MCP Integration',
    description: `OpenUI supports the Model Context Protocol (MCP) for connecting to external tool servers. Discover and execute tools from any MCP-compatible server, extending OpenUI's capabilities with third-party integrations.`,
    layout: 'text-right',
    workflow: {
      title: 'MCP Tool Execution',
      steps: [
        { label: 'External MCP Servers', description: 'Connect to third-party MCP tool servers' },
        { label: 'Tool Discovery', description: 'Automatically discover available tools and schemas' },
        { label: 'Execution', description: 'AI selects and executes the right tool for the task' },
        { label: 'Response', description: 'Tool results are integrated into the conversation' },
      ],
    },
    features: [
      {
        icon: 'plug',
        title: 'Protocol Standard',
        description: 'MCP is an open protocol for connecting AI models to external tools. OpenUI implements the full MCP client specification.',
      },
      {
        icon: 'puzzle',
        title: 'Extensible',
        description: 'Add any MCP-compatible server to extend OpenUI with databases, APIs, file systems, or custom business logic.',
      },
    ],
    codeSnippet: {
      language: 'json',
      title: 'MCP Server Configuration',
      code: `{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem"],
      "env": { "HOME": "/Users/you" }
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "ghp_..." }
    }
  }
}`,
    },
  },

  // ─── AI EXPERIENCES ───
  {
    id: 'ai-interviewer',
    category: 'AI Experiences',
    title: 'AI Interviewer',
    description: `OpenUI includes a built-in AI interviewer that conducts realistic mock interviews. Upload a resume, select a job role, and the AI generates tailored questions, conducts a voice conversation, evaluates responses, and produces a detailed summary report.`,
    layout: 'text-left',
    workflow: {
      title: 'Interview Flow',
      steps: [
        { label: 'Resume', description: 'Upload your resume or paste job description' },
        { label: 'Question Generation', description: 'AI generates role-specific interview questions' },
        { label: 'Voice Conversation', description: 'Conduct the interview via push-to-talk voice' },
        { label: 'Evaluation', description: 'AI evaluates answers for completeness and quality' },
        { label: 'Summary Report', description: 'Receive a detailed scorecard with improvement tips' },
      ],
    },
    features: [
      {
        icon: 'user',
        title: 'Role-Specific',
        description: 'Questions are tailored to the specific job role, seniority level, and technical requirements from the job description.',
      },
      {
        icon: 'chart',
        title: 'Detailed Scoring',
        description: 'Each answer is evaluated on technical accuracy, communication clarity, and completeness with actionable feedback.',
      },
    ],
  },
  {
    id: 'team-workspaces',
    category: 'AI Experiences',
    title: 'Team Workspaces',
    description: `Teams plan users get shared workspaces where multiple team members can collaborate with the AI. Share conversation history, custom prompts, and tool configurations across the entire team.`,
    layout: 'text-right',
    features: [
      {
        icon: 'users',
        title: 'Shared Conversations',
        description: 'Team members can access shared AI conversations, building on each other\'s context and decisions.',
      },
      {
        icon: 'settings',
        title: 'Team Configurations',
        description: 'Admins can set team-wide AI preferences, allowed models, tool permissions, and usage policies.',
      },
      {
        icon: 'chart',
        title: 'Usage Dashboard',
        description: 'Monitor voice minutes, message counts, and model usage across the team from a centralized admin dashboard.',
      },
    ],
  },
  {
    id: 'shared-memory',
    category: 'AI Experiences',
    title: 'Shared Memory',
    description: `Team workspaces include shared memory — AI context that persists across team members. When one person teaches the AI about your codebase, API patterns, or team conventions, everyone on the team benefits.`,
    layout: 'text-left',
    features: [
      {
        icon: 'brain',
        title: 'Collective Knowledge',
        description: 'The AI accumulates team knowledge over time. New team members get instant context about projects, conventions, and decisions.',
      },
      {
        icon: 'bookmark',
        title: 'Pinned Context',
        description: 'Pin important information (API docs, coding standards, architecture decisions) to the shared memory for persistent reference.',
      },
    ],
  },

  // ─── PLATFORM ───
  {
    id: 'authentication',
    category: 'Platform',
    title: 'Authentication',
    description: `OpenUI uses Supabase for authentication, supporting email/password, OAuth providers, and magic links. The free tier requires no account — just download and start using. Pro and Teams require authentication for license management.`,
    layout: 'text-right',
    features: [
      {
        icon: 'key',
        title: 'Flexible Auth',
        description: 'Sign in with email, Google, GitHub, or magic link. Enterprise plans support SAML SSO and SCIM provisioning.',
      },
      {
        icon: 'shield',
        title: 'Secure Sessions',
        description: 'JWT-based sessions with automatic refresh. Tokens are stored securely in the OS keychain, not in local storage.',
      },
    ],
  },
  {
    id: 'subscription-system',
    category: 'Platform',
    title: 'Subscription System',
    description: `Stripe powers the subscription and billing system. Upgrade, downgrade, or cancel anytime from within the app. Pro and Teams plans are billed monthly or annually with automatic receipt generation.`,
    layout: 'text-left',
    features: [
      {
        icon: 'card',
        title: 'Stripe Checkout',
        description: 'Secure payment processing through Stripe. Support for all major credit cards, Apple Pay, and Google Pay.',
      },
      {
        icon: 'refresh',
        title: 'Plan Management',
        description: 'Upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.',
      },
    ],
  },
  {
    id: 'usage-limits',
    category: 'Platform',
    title: 'Usage Limits',
    description: `Each plan includes defined usage limits for voice minutes and AI messages. The system tracks usage in real-time and provides clear indicators when you're approaching your limits.`,
    layout: 'text-right',
    features: [
      {
        icon: 'gauge',
        title: 'Real-time Tracking',
        description: 'See your remaining voice minutes and message count in the app status bar. Usage resets on a rolling 24-hour or monthly basis.',
      },
      {
        icon: 'bell',
        title: 'Usage Alerts',
        description: 'Receive notifications at 80% and 100% usage. Pro users can enable automatic overage billing for uninterrupted service.',
      },
    ],
  },
  {
    id: 'billing',
    category: 'Platform',
    title: 'Billing',
    description: `Transparent billing with no hidden fees. Monthly and annual billing options. Annual plans save approximately 15%. Invoices and receipts are available in your account portal.`,
    layout: 'text-left',
    features: [
      {
        icon: 'receipt',
        title: 'Transparent Pricing',
        description: 'No hidden fees, no surprises. See your exact charges before committing. Cancel anytime with no penalties.',
      },
      {
        icon: 'download',
        title: 'Invoice Portal',
        description: 'Download invoices, receipts, and tax documents from your billing portal. Automatic receipt generation for every payment.',
      },
    ],
  },

  // ─── SECURITY ───
  {
    id: 'privacy',
    category: 'Security',
    title: 'Privacy',
    description: `OpenUI is built privacy-first. Local Whisper transcription, local OCR, encrypted API connections, and OS-level keychain storage. You control exactly what data leaves your machine.`,
    layout: 'text-right',
    features: [
      {
        icon: 'shield',
        title: 'Data Sovereignty',
        description: 'Your conversations, files, and screen content stay on your machine by default. Cloud features are opt-in and clearly labeled.',
      },
      {
        icon: 'eye-off',
        title: 'No Telemetry',
        description: 'OpenUI does not collect usage analytics, screen recordings, or conversation data. Zero telemetry by default.',
      },
    ],
    callout: {
      type: 'info',
      text: 'When you use cloud AI models, your messages are sent to the model provider (Anthropic or OpenAI) for processing. These providers do not train on API data.',
    },
  },
  {
    id: 'local-processing',
    category: 'Security',
    title: 'Local Processing',
    description: `Voice transcription, OCR, and optionally AI inference all run locally on your machine. This means zero-latency processing for many features and complete data privacy.`,
    layout: 'text-left',
    features: [
      {
        icon: 'cpu',
        title: 'On-Device AI',
        description: 'Whisper, Tesseract OCR, and Ollama models run entirely on your hardware. No internet connection required for these features.',
      },
      {
        icon: 'lock',
        title: 'Air-Gap Compatible',
        description: 'Configure OpenUI for fully offline operation with local models. Ideal for classified environments or strict compliance requirements.',
      },
    ],
  },
  {
    id: 'cloud-security',
    category: 'Security',
    title: 'Cloud Security',
    description: `When cloud features are used, all connections are encrypted with TLS 1.3. API keys are stored in the OS keychain (macOS Keychain, Windows Credential Manager), never in plaintext configuration files.`,
    layout: 'text-right',
    features: [
      {
        icon: 'lock',
        title: 'TLS 1.3 Encryption',
        description: 'All API calls use the latest TLS encryption standard. Certificate pinning prevents man-in-the-middle attacks.',
      },
      {
        icon: 'key',
        title: 'Keychain Storage',
        description: 'API keys and tokens are stored in the OS-native secure keychain. They\'re never written to disk in plaintext.',
      },
    ],
  },
  {
    id: 'permission-system',
    category: 'Security',
    title: 'Permission System',
    description: `OpenUI uses a granular permission system for desktop automation. The AI must request permission before executing system commands, accessing files, or controlling the mouse. You can pre-approve common actions or require approval every time.`,
    layout: 'text-left',
    features: [
      {
        icon: 'check-shield',
        title: 'Action Approval',
        description: 'Every system action (clicking, typing, opening apps) requires your approval. See exactly what the AI wants to do before it acts.',
      },
      {
        icon: 'settings',
        title: 'Auto-Approve Rules',
        description: 'Create rules to auto-approve common safe actions like opening specific apps or typing in specific fields. Full control over automation boundaries.',
      },
    ],
  },

  // ─── DEVELOPERS ───
  {
    id: 'electron-architecture',
    category: 'Developers',
    title: 'Electron Architecture',
    description: `OpenUI is built on Electron with strict security defaults: context isolation enabled, node integration disabled in the renderer, and all IPC communication validated. The main process handles AI routing, system automation, and tool execution.`,
    layout: 'text-right',
    features: [
      {
        icon: 'layers',
        title: 'Process Separation',
        description: 'Main process handles system access and AI routing. Renderer process handles the React UI. Communication via validated IPC channels.',
      },
      {
        icon: 'shield',
        title: 'Context Isolation',
        description: 'The renderer runs in a sandboxed context with no direct access to Node.js APIs. All system operations go through the preload bridge.',
      },
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Electron Main Process',
      code: `// Main process setup
const { app, BrowserWindow, ipcMain } = require('electron');

const win = new BrowserWindow({
  webPreferences: {
    contextIsolation: true,
    nodeIntegration: false,
    preload: path.join(__dirname, 'preload.js'),
    sandbox: true,
  }
});

// Validated IPC handler
ipcMain.handle('ai:chat', async (event, message) => {
  validateMessage(message);
  return await aiRouter.process(message);
});`,
    },
  },
  {
    id: 'react-renderer',
    category: 'Developers',
    title: 'React Renderer',
    description: `The UI is built with React and renders inside the Electron renderer process. Components include the chat interface, settings panels, voice waveform visualizer, and system tray popup. State management uses React hooks and context.`,
    layout: 'text-left',
    features: [
      {
        icon: 'code',
        title: 'Component Library',
        description: 'Modular React components for chat bubbles, code blocks, tool call cards, voice waveforms, and settings panels.',
      },
      {
        icon: 'palette',
        title: 'Theme System',
        description: 'CSS custom properties for consistent theming. Dark mode by default with every color tokenized for easy customization.',
      },
    ],
  },
  {
    id: 'ipc-communication',
    category: 'Developers',
    title: 'IPC Communication',
    description: `All communication between the renderer and main process uses Electron's IPC with a validated preload bridge. Each channel has a defined schema, and all messages are type-checked before processing.`,
    layout: 'text-right',
    features: [
      {
        icon: 'link',
        title: 'Typed Channels',
        description: 'Every IPC channel has a TypeScript interface defining the request and response shapes. Invalid messages are rejected at the bridge.',
      },
      {
        icon: 'shield',
        title: 'Preload Bridge',
        description: 'The preload script exposes a minimal, curated API to the renderer. No direct access to Node.js, filesystem, or process APIs.',
      },
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Preload Bridge',
      code: `// preload.js — Secure bridge
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('openui', {
  chat: (message) => ipcRenderer.invoke('ai:chat', message),
  voice: {
    start: () => ipcRenderer.send('voice:start'),
    stop: () => ipcRenderer.invoke('voice:stop'),
  },
  system: {
    screenshot: () => ipcRenderer.invoke('system:screenshot'),
  },
});`,
    },
  },
  {
    id: 'tool-execution',
    category: 'Developers',
    title: 'Tool Execution',
    description: `OpenUI's AI can call tools — functions that interact with the operating system, file system, browser, or external APIs. Tools are defined with schemas, validated before execution, and sandboxed for safety.`,
    layout: 'text-left',
    features: [
      {
        icon: 'wrench',
        title: 'Tool Registry',
        description: 'Tools are registered with name, description, parameter schema, and execution function. The AI selects tools based on task requirements.',
      },
      {
        icon: 'shield',
        title: 'Sandboxed Execution',
        description: 'Tool execution is sandboxed with timeout limits, output size caps, and permission gates. No tool can run without user approval.',
      },
    ],
    codeSnippet: {
      language: 'javascript',
      title: 'Tool Definition',
      code: `// Tool definition example
const screenshotTool = {
  name: 'take_screenshot',
  description: 'Capture the current screen',
  parameters: {
    type: 'object',
    properties: {
      region: {
        type: 'string',
        enum: ['full', 'window', 'selection'],
        default: 'full',
      },
    },
  },
  execute: async ({ region }) => {
    const img = await captureScreen(region);
    return { image: img, format: 'png' };
  },
};`,
    },
  },
  {
    id: 'apis',
    category: 'Developers',
    title: 'APIs',
    description: `Enterprise plans include access to private API endpoints for programmatic control of OpenUI. Send messages, trigger automations, query conversation history, and manage team settings via REST API.`,
    layout: 'text-right',
    features: [
      {
        icon: 'terminal',
        title: 'REST API',
        description: 'Full REST API for Enterprise users. Authenticate with API keys and control OpenUI programmatically from your own applications.',
      },
      {
        icon: 'webhook',
        title: 'Webhooks',
        description: 'Subscribe to events like conversation completion, tool execution, or usage threshold alerts. Integrate OpenUI into your existing workflows.',
      },
    ],
    codeSnippet: {
      language: 'bash',
      title: 'API Example',
      code: `# Send a message via API
curl -X POST https://api.openui.dev/v1/chat \\
  -H "Authorization: Bearer $OPENUI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Review the latest PR on main",
    "workspace": "engineering",
    "tools": ["github", "code-review"]
  }'`,
    },
  },
]

// ─── PLATFORM FAQ ───

export const platformFaqItems = [
  {
    question: 'What operating systems does OpenUI support?',
    answer: `OpenUI runs on macOS 12+ (Apple Silicon and Intel) and Windows 10+ (x64 and ia32). Linux support is planned for a future release.`,
  },
  {
    question: 'Do I need an internet connection?',
    answer: `For the free tier and cloud AI features, yes. However, you can run OpenUI fully offline by configuring a local Ollama model. Voice transcription (Whisper) and OCR (Tesseract) always run locally regardless of connectivity.`,
  },
  {
    question: 'How does the AI access my screen?',
    answer: `OpenUI uses the system screenshot API to capture your screen only when explicitly triggered by a voice command or text request. It never captures your screen in the background. On macOS, you must grant Screen Recording permission in System Settings.`,
  },
  {
    question: 'Is my data sent to the cloud?',
    answer: `Only when you use cloud AI models (Claude, GPT-4o). Voice transcription, OCR, and local model inference happen entirely on your machine. Cloud API providers do not train on API data. You can see exactly what data is sent in the conversation log.`,
  },
  {
    question: 'Can I use my own API keys?',
    answer: `Yes. Pro users can bring their own Anthropic or OpenAI API keys in Settings → Models → Custom Keys. Your keys are stored in the OS keychain, never in plaintext files.`,
  },
  {
    question: 'How does autonomous coding work?',
    answer: `When you go idle, OpenUI reads your task list, writes code in a sandboxed workspace, runs your test suite, and iterates on failures. It runs up to 20 agentic turns per session and stops cleanly when tests pass or you return. Requires Pro or Enterprise plan.`,
  },
  {
    question: 'What is MCP?',
    answer: `MCP (Model Context Protocol) is an open standard for connecting AI models to external tools and data sources. OpenUI implements the MCP client specification, allowing you to connect to any MCP-compatible server for extended capabilities like database access, custom APIs, or file system tools.`,
  },
  {
    question: 'How do I get Enterprise access?',
    answer: `Contact our sales team at sales@openui.com for Enterprise pricing. Enterprise includes unlimited seats, dedicated infrastructure, SSO, SCIM, SOC 2 support, custom SLAs, and on-premise deployment options.`,
  },
]
