export const privacySections = [
  {
    id: 'overview',
    title: 'Overview',
    content: `OpenUI is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you use our desktop application and website. We build tools that run directly on your computer, which means we prioritize keeping your data on your device whenever possible. By using OpenUI, you agree to the collection and use of information in accordance with this policy.`
  },
  {
    id: 'information-collected',
    title: 'Information We Collect',
    content: `We collect several types of information to provide and improve our services:
- **Account Information:** When you sign up, we collect your email address, name, and login credentials.
- **Billing Details:** If you purchase a premium plan, we process payments via Stripe, which collects your payment information.
- **Usage Statistics:** We collect anonymous telemetry about features used, macro execution rates, and overall page navigation metrics.
- **Device Specifications:** To optimize local model allocations, we detect OS version, GPU model, total RAM, and execution runtime indicators.
- **Diagnostics & Error Logs:** When the app encounters errors, automated crash logs containing execution stack traces are collected to help debug stability issues.`
  },
  {
    id: 'ai-conversations',
    title: 'AI Conversations',
    content: `OpenUI handles chat interfaces, code generation requests, and desktop prompts:
- **Conversation History:** Text prompts and responses are stored securely in your local SQLite database on your device. If syncing is enabled (premium features), conversations are encrypted end-to-end and stored on our servers.
- **File & Image Uploads:** Files and images you feed into AI models are stored in local temporary directories and deleted upon session termination, unless you choose to archive them in your shared history.`
  },
  {
    id: 'voice-screen-data',
    title: 'Voice & Screen Data',
    content: `Sensory feature handling guarantees full user autonomy:
- **Voice Recordings:** Real-time microphone audio is captured locally for Whisper transcription. We do not store raw audio files on our servers.
- **Screen Captures & OCR:** When screen understanding or coordinate-scanning triggers, screenshots are parsed by local OCR engines. No telemetry or screenshot frames are transmitted to our servers unless explicitly requested during cloud multi-modal reasoning runs.`
  },
  {
    id: 'desktop-permissions',
    title: 'Desktop Permissions',
    content: `OpenUI requires OS-level permissions to automate desktop tasks:
- **Microphone:** Required for local Push-to-Talk voice transcription.
- **Screen Recording:** Necessary for coordinate scanning and OCR.
- **Accessibility:** Required to execute mouse paths and key inputs.
- **Filesystem & Calendar:** Used to run file lookups and coordinate scheduling syncs.
*You can modify or revoke these permissions at any time through your OS Settings panel.*`,
    callout: {
      type: 'warn',
      title: 'Security Tip',
      text: 'To maximize security, we recommend granting screen recording and accessibility access only to authenticated folders in your workspace.'
    }
  },
  {
    id: 'use-of-information',
    title: 'How We Use Information',
    content: `We use the collected information for various business purposes:
- To authenticate accounts and manage user subscriptions.
- To execute, debug, and improve local and cloud model routing algorithms.
- To detect, prevent, and address system vulnerability risks or fraudulent usage activities.
- To generate aggregated analytics on feature usage to guide our product roadmaps.
- To provide active customer support and notify users about platform modifications.`
  },
  {
    id: 'ai-providers',
    title: 'AI Providers',
    content: `Depending on your plan and active settings, text/vision queries are processed by:
- **Claude (Anthropic), OpenAI, or Google APIs:** Used for advanced cloud reasoning prompts. Requests are governed by their respective API developer terms (e.g. no training on user payload data).
- **Local Models (e.g., Ollama):** Run fully offline and on-device. No data leaves your machine when local models are active.`
  },
  {
    id: 'data-storage',
    title: 'Data Storage & Retention',
    content: `We retain personal data only as long as necessary:
- Telemetry and usage statistics are purged after 90 days.
- Account databases are maintained until deletion request.
- **Account Deletion:** Users can request immediate deletion of their account databases at any time. All backups are overwritten within 30 days of deletion.`
  },
  {
    id: 'security',
    title: 'Security Architecture',
    content: `We implement enterprise-grade security protocols:
- **TLS Encryption:** All cloud requests travel via secure HTTPS lines.
- **Keychain Storage:** Local API keys are saved inside OS Keychains (macOS Keychain / Windows Credential Manager).
- **Isolated Sandboxing:** We isolate rendering threads from system execution hooks through safe IPC context bridges.`,
    callout: {
      type: 'info',
      title: 'Privacy Notice',
      text: 'OpenUI will never train custom public models on your conversation history or uploaded documents.'
    }
  },
  {
    id: 'cookies',
    title: 'Cookies & Analytics',
    content: `Our web dashboard uses cookies to enhance authentication states, store user preferences (such as theme choice), and gather anonymous analytics metrics via lightweight privacy-compliant trackers. You can disable cookies in your browser settings, though some dashboard functions may be restricted.`
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: `Depending on your jurisdiction (such as GDPR or CCPA), you hold structural rights:
- **Access & Portability:** Request a copy of all stored logs.
- **Correction & Erasure:** Correct spelling errors or delete account history databases.
- **Withdraw Consent:** Terminate active data pipelines at any time by switching off tracking toggles in settings.`
  },
  {
    id: 'childrens-privacy',
    title: 'Children\'s Privacy',
    content: `Our services are not intended for children under the age of 13. We do not knowingly collect personal data from anyone under 13. If we discover a child under 13 has signed up, we will terminate the account and purge related database entries immediately.`
  },
  {
    id: 'international-users',
    title: 'International Users',
    content: `If you access OpenUI from outside the United States, please note that personal data is transferred, processed, and archived inside servers located in the US. By accessing the site, you consent to this data transfer in accordance with regional privacy laws.`
  },
  {
    id: 'policy-updates',
    title: 'Policy Updates',
    content: `We modify this policy periodically to align with product updates or compliance shifts. We will announce revisions by updating the "Last Updated" date and posting a notice on our primary web interface.`
  },
  {
    id: 'contact-info',
    title: 'Contact Information',
    content: `For questions about this policy or database deletion requests, please contact our legal team at:
- Email: **legal@openui.ai**
- Address: OpenUI Inc., 100 Pine Street, San Francisco, CA 94111`
  }
]

export const privacyFaqs = [
  {
    question: 'Is my data encrypted?',
    answer: 'Yes. All data in transit uses TLS 1.3 encryption. Local databases are protected by standard user session security, and sync payloads use end-to-end encryption.'
  },
  {
    question: 'Does OpenUI store conversations?',
    answer: 'By default, conversations are stored locally on your device. Cloud archiving and sync are optional features that you can toggle on or off anytime.'
  },
  {
    question: 'Can I delete my data?',
    answer: 'Absolutely. You can clear local databases directly from settings or request database deletion of your cloud account. Email data deletions are processed within 48 hours.'
  },
  {
    question: 'Are screenshots stored?',
    answer: 'No. Screen captures processed during coordinate OCR scans are held temporary in volatile RAM and immediately wiped after layout assessment.'
  },
  {
    question: 'Can I use local AI only?',
    answer: 'Yes. OpenUI fully supports local Ollama integrations. When running local configurations, all model inference happens offline on your own machine.'
  }
]
