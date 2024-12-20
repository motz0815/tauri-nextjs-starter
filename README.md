# Tauri v2 + Next.js v15 Starter

A modern starter template using Tauri v2 and Next.js v15, configured for static exports and optimal desktop and mobile application development. Features include:

- 🦀 Tauri v2 for native desktop capabilities
- ⚡ Next.js 15 with static export configuration
- 🎨 TailwindCSS for styling
- 📝 TypeScript support
- 🔧 ESLint + Prettier for code quality
- 🥯 Bun as the package manager

## Prerequisites

Before you begin, ensure you have the following installed:
- [Bun](https://bun.sh/) (v1.1.38 or later)
- [Rust](https://www.rust-lang.org/) (v1.77.2 or later)
- [Tauri Prerequisites](https://tauri.app/v2/guides/getting-started/prerequisites)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tauri-nextjs-starter
cd tauri-nextjs-starter
```

2. Install dependencies:
```bash
bun install
```

## Development

To start the development server, run:
```bash
bun tauri dev
```

This will:
- Start the Next.js development server
- Launch the Tauri development window
- Enable hot-reload for both frontend and Rust code changes

## Building

To create a production build:
```bash
bun tauri build
```

NOTE: The build command will fail if you do not modify the [`src-tauri/tauri.conf.json`](src-tauri/tauri.conf.json) to use your own identifier.

This command will:
1. Build the Next.js application as a static export
2. Compile the Rust code
3. Package everything into a native desktop application

The built applications will be available in [`src-tauri/target/release`](src-tauri/target/release).

## Project Structure
```
.
├── app/ # Next.js application files
├── public/ # Static assets
├── src-tauri/ # Rust source code for Tauri
│ ├── src/ # Rust application code
│ ├── Cargo.toml # Rust dependencies
│ └── tauri.conf.json # Tauri configuration
└── package.json # Node.js dependencies
```

## Configuration

### Next.js

The application is configured for static exports, which is required for Tauri integration. Key configurations can be found in [`next.config.ts`](next.config.ts).

### Tauri

Tauri configuration is managed in [`src-tauri/tauri.conf.json`](src-tauri/tauri.conf.json), which handles window settings, build commands, and application metadata.


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.