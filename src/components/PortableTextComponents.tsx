import React from 'react';
import { PortableTextComponents } from 'next-sanity';

export const portableTextComponents: PortableTextComponents = {
  block: {
    // Headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-neutral-900 mb-6 mt-8 first:mt-0 font-sombra">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-neutral-900 mb-4 mt-8 font-sombra">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-neutral-900 mb-3 mt-6 font-sombra">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-neutral-900 mb-2 mt-4 font-inter">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold text-neutral-900 mb-2 mt-4 font-inter">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold text-neutral-900 mb-2 mt-4 font-inter">
        {children}
      </h6>
    ),
    // Normal paragraph
    normal: ({ children }) => (
      <p className="text-neutral-700 leading-relaxed mb-4 text-base">
        {children}
      </p>
    ),
    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-neutral-50 rounded-r-lg italic text-neutral-600">
        {children}
      </blockquote>
    ),
    // Code Excerpt - custom style
    codeExcerpt: ({ children }) => (
      <div className="bg-neutral-900 text-white p-4 rounded-lg my-6 font-mono text-sm leading-relaxed">
        {children}
      </div>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    // List items
    bullet: ({ children }) => (
      <li className="text-neutral-700 text-base">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-neutral-700 text-base">
        {children}
      </li>
    ),
  },
  marks: {
    // Strong/bold text
    strong: ({ children }) => (
      <strong className="font-semibold text-neutral-900">
        {children}
      </strong>
    ),
    // Emphasis/italic text
    em: ({ children }) => (
      <em className="italic text-neutral-700">
        {children}
      </em>
    ),
    // Code text
    code: ({ children }) => (
      <code className="bg-neutral-100 px-2 py-1 rounded text-sm font-mono text-neutral-800">
        {children}
      </code>
    ),
    // Links
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? '_blank' : undefined}
        rel={value?.blank ? 'noopener noreferrer' : undefined}
        className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    // Code blocks
    codeBlock: ({ value }) => (
      <div className="my-6">
        {value?.filename && (
          <div className="bg-neutral-700 text-white px-4 py-2 text-sm font-mono rounded-t-lg border-b border-neutral-600">
            {value.filename}
          </div>
        )}
        <pre className={`bg-neutral-900 text-white p-4 overflow-x-auto ${value?.filename ? 'rounded-b-lg' : 'rounded-lg'}`}>
          <code className="text-sm font-mono whitespace-pre">
            {value?.code}
          </code>
        </pre>
        {value?.language && (
          <div className="text-xs text-neutral-500 mt-1 text-right">
            {value.language}
          </div>
        )}
      </div>
    ),
  },
}; 