import DOMPurify from 'dompurify';
import { marked } from 'marked';
import React from 'react';
import { MarkdownParserProps } from './interface/AllInterfaceAndTypes';

function parseBulletList(markdown: string): string {

    const bulletListRegex = /^(\s*)-\s(.+)$/gm;
    let html = markdown.replace(bulletListRegex, (match, indent, content) => {
        const level = indent.length;
        return `<li data-level="${level}">${content}</li>`;
    });

    // Group list items into nested <ul> tags
    const listItemRegex = /<li data-level="(\d+)">(.*?)<\/li>/g;
    const listItems = [...html.matchAll(listItemRegex)];
    
    let result = '';
    let currentLevel = -1;
    
    for (const [fullMatch, level, content] of listItems) {
        const numLevel = parseInt(level);
        
        if (numLevel > currentLevel) {
            result += '<ul>'.repeat(numLevel - currentLevel);
        } else if (numLevel < currentLevel) {
            result += '</ul>'.repeat(currentLevel - numLevel);
        }
        
        result += `<li>${content}</li>`;
        currentLevel = numLevel;
    }
    
    result += '</ul>'.repeat(currentLevel + 1);
    
    return result;
}

const MarkdownParser: React.FC<MarkdownParserProps> = ({ content }) => {
    const parseMarkdown = (markdown: string, useMarked: boolean = true): string => {
        marked.setOptions({})
        if (useMarked) {
            let html = marked.parse(markdown);
    
            // Sanitize the HTML
            html = DOMPurify.sanitize(html as string);
    
            return html;
        }
        // Replace Markdown headers
        let html = markdown
            .replace(/^###### (.+)$/gm, '<h6>$1</h6>')
            .replace(/^##### (.+)$/gm, '<h5>$1</h5>')
            .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^# (.+)$/gm, '<h1>$1</h1>');

        // Replace Markdown links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

        // Replace Markdown bold text
        html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

        // Replace Markdown italic text
        html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

        // Replace Markdown code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
        // Replace Markdown block code
        html = html.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');

        // Replace Markdown bullet points
        html = parseBulletList(html);

        // Replace Markdown paragraphs
        html = html.replace(/(?:\n\n|\n$)/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>');

        // Sanitize the HTML
        html = DOMPurify.sanitize(html);

        return html;
    };

    const containerStyle: React.CSSProperties = {
        paddingLeft: '20px',
        margin: '0',
        fontSize: '16',
        lineHeight: '1.6',
    };

    return (
        <div className="markdown-content" style={containerStyle} dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} />
    );
};

export default MarkdownParser;