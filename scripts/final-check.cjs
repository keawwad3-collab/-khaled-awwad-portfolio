#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const FORBIDDEN_KEYWORDS = [
  'portfolio',
  'Portfolio',
  'PORTFOLIO',
  'projects',
  'Projects',
  'PROJECTS',
  'case study',
  'Case Study',
  'case-study',
  'Case-Study',
  'view projects',
  'View Projects',
  'see portfolio',
  'See Portfolio',
  'Organic Growth',
  'Design Turnaround Improvement',
  'Brand Consistency'
];

const SEARCH_DIRS = [
  path.join(__dirname, '../client/src/pages'),
  path.join(__dirname, '../client/src/components')
];

let foundIssues = false;

function searchFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];
  
  FORBIDDEN_KEYWORDS.forEach(keyword => {
    if (content.includes(keyword)) {
      const lines = content.split('\n');
      lines.forEach((line, index) => {
        if (line.includes(keyword)) {
          issues.push({
            keyword,
            line: index + 1,
            content: line.trim()
          });
        }
      });
    }
  });
  
  return issues;
}

function searchDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      searchDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const issues = searchFile(filePath);
      if (issues.length > 0) {
        foundIssues = true;
        console.error(`\n❌ Found forbidden keywords in ${filePath}:`);
        issues.forEach(issue => {
          console.error(`   Line ${issue.line}: "${issue.keyword}" in: ${issue.content.substring(0, 80)}...`);
        });
      }
    }
  });
}

console.log('🔍 Checking for forbidden keywords...\n');

SEARCH_DIRS.forEach(dir => {
  console.log(`Searching ${dir}...`);
  searchDirectory(dir);
});

if (foundIssues) {
  console.error('\n❌ BUILD FAILED: Forbidden keywords found in code.');
  console.error('Please remove all portfolio, case study, and metric references before deploying.\n');
  process.exit(1);
} else {
  console.log('\n✅ No forbidden keywords found. Build can proceed.\n');
  process.exit(0);
}
