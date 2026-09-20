import { useLang } from '@rspress/core/runtime';
import { useCssModification } from './CssModificationContext';
import { FloatingToolbar } from './FloatingToolbar';
import styles from './FloatingToolbar.module.scss';

export function CssModificationIndicator() {
  const lang = useLang();
  const { hasModifications, resetAll } = useCssModification();

  if (!hasModifications) {
    return null;
  }

  return (
    <FloatingToolbar
      label={lang === 'ru' ? 'CSS изменён' : 'CSS Modified'}
      kind="css"
    >
      <button type="button" onClick={resetAll} className={styles.action}>
        {lang === 'ru' ? 'Сброс' : 'Reset'}
      </button>
    </FloatingToolbar>
  );
}