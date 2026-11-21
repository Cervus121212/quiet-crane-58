import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || '/output'
const ENTRY_FILE = 'entry.txt'

// The poem — 135 characters, do not alter the text.
const LINES = [
  'We agree: you take this end,',
  'I take that one.',
  'Neither of us sees where it is going.',
  'The doorway decides the angle.',
  'We carry it through.',
]

function buildEntry(): string {
  return LINES.join('\n')
}

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true })
  writeFileSync(join(OUTPUT_DIR, ENTRY_FILE), buildEntry(), 'utf8')
}

main()
