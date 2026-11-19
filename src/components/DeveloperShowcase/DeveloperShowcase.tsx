import { Check, Code2, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import styles from './DeveloperShowcase.module.scss'

export function DeveloperShowcase() {
  return (
    <>
      <div className={styles.editor} aria-label="TypeScript code preview">
        <div className={styles.editorHeader}>
          <div className={styles.dots}>
            <i />
            <i />
            <i />
          </div>
          <span>
            <Code2 /> portfolio.tsx
          </span>
          <small>×</small>
        </div>

        <div className={styles.code}>
          <span className={styles.lineNumber}>01</span>
          <code>
            <b>type</b> Product = {'{'}
          </code>
          <span className={styles.lineNumber}>02</span>
          <code>
            &nbsp;&nbsp;design: <em>'thoughtful'</em>
          </code>
          <span className={styles.lineNumber}>03</span>
          <code>
            &nbsp;&nbsp;code: <em>'maintainable'</em>
          </code>
          <span className={styles.lineNumber}>04</span>
          <code>
            &nbsp;&nbsp;experience: <em>'intuitive'</em>
          </code>
          <span className={styles.lineNumber}>05</span>
          <code>{'}'}</code>
          <span className={styles.lineNumber}>06</span>
          <code>&nbsp;</code>
          <span className={styles.lineNumber}>07</span>
          <code>
            <b>const</b> build = <i>async</i> (idea: Idea) =&gt;
          </code>
          <span className={styles.lineNumber}>08</span>
          <code>
            &nbsp;&nbsp;launch(idea, {'{'} quality: <em>'production'</em> {'}'})<u />
          </code>
        </div>

        <div className={styles.editorFooter}>
          <span>main*</span>
          <span>TypeScript&nbsp;&nbsp; UTF-8</span>
        </div>
      </div>

      <div className={styles.status} aria-label="Development status">
        <div>
          <Check />
          <span>BUILD</span>
          <strong>PASSING</strong>
        </div>
        <div>
          <ShieldCheck />
          <span>TYPES</span>
          <strong>STRICT</strong>
        </div>
        <div>
          <MonitorSmartphone />
          <span>LAYOUT</span>
          <strong>RESPONSIVE</strong>
        </div>
      </div>
    </>
  )
}
