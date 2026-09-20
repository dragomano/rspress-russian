import { useLang } from '@rspress/core/runtime';
import { Layout, type LayoutProps, Link } from '@rspress/core/theme-original';
import {
  createContext,
  type ReactNode,
  useContext,
  useState,
  useSyncExternalStore,
} from 'react';
import { CssModificationIndicator } from './CssModificationIndicator';
import { FloatingToolbar } from './FloatingToolbar';
import toolbarStyles from './FloatingToolbar.module.scss';
import styles from './SlotPreview.module.scss';

const slots = [
  'top',
  'bottom',
  'beforeNav',
  'afterNav',
  'beforeNavTitle',
  'navTitle',
  'afterNavTitle',
  'beforeNavMenu',
  'afterNavMenu',
  'beforeLeftNavItems',
  'afterLeftNavItems',
  'beforeRightNavItems',
  'afterRightNavItems',
  'beforeSidebar',
  'afterSidebar',
  'beforeOutline',
  'afterOutline',
  'beforeDoc',
  'afterDoc',
  'beforeDocContent',
  'afterDocContent',
  'beforeDocFooter',
  'afterDocFooter',
  'beforeHero',
  'afterHero',
  'beforeFeatures',
  'afterFeatures',
] as const satisfies readonly (keyof LayoutProps)[];

const SlotPreviewContext = createContext({
  enabled: false,
  toggle: () => {},
});

const mobileNavQuery = '(max-width: 768px)';
const subscribeMobileNav = (notify: () => void) => {
  const query = window.matchMedia(mobileNavQuery);
  query.addEventListener('change', notify);
  return () => query.removeEventListener('change', notify);
};
const getMobileNav = () => window.matchMedia(mobileNavQuery).matches;
const getServerMobileNav = () => false;

export function SlotPreview({
  name,
  children,
}: {
  name: (typeof slots)[number];
  children?: ReactNode;
}) {
  const { enabled } = useContext(SlotPreviewContext);
  const mobileNav = useSyncExternalStore(
    subscribeMobileNav,
    getMobileNav,
    getServerMobileNav,
  );
  const Container = name.endsWith('NavItems') && !mobileNav ? 'li' : 'div';

  if (!enabled) {
    return children;
  }

  return (
    <Container className={styles.slot} data-slot-container={name}>
      <div className={styles.content}>{children}</div>
      <span
        className={styles.marker}
        data-slot-preview={name}
        tabIndex={
          name.endsWith('NavTitle') ||
          name.endsWith('NavMenu') ||
          name.endsWith('NavItems') ||
          name === 'navTitle'
            ? 0
            : undefined
        }
        role="img"
        aria-label={name}
      >
        <span className={styles.label}>{name}</span>
      </span>
    </Container>
  );
}

export function SlotPreviewToggle() {
  if (import.meta.env.SSG_MD) {
    return null;
  }

  const { enabled, toggle } = useContext(SlotPreviewContext);
  const isRu = useLang() === 'ru';

  return (
    <button
      type="button"
      className={styles.button}
      aria-pressed={enabled}
      onClick={toggle}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M3 9h18M9 9v12" />
      </svg>
      {enabled
        ? isRu
          ? 'Выйти из режима просмотра слотов'
          : 'Exit slot preview'
        : isRu
          ? 'Показать расположение слотов'
          : 'Show slot locations'}
    </button>
  );
}

export function SlotPreviewLayout(props: LayoutProps) {
  const [enabled, setEnabled] = useState(false);
  const isRu = useLang() === 'ru';
  const previewProps = { ...props };

  if (enabled) {
    for (const slot of slots) {
      // These slots are assembled and previewed in the website's custom layouts.
      if (slot === 'afterFeatures' || slot === 'beforeDocContent') {
        continue;
      }

      previewProps[slot] = <SlotPreview name={slot}>{props[slot]}</SlotPreview>;
    }
  }

  return (
    <SlotPreviewContext.Provider
      value={{ enabled, toggle: () => setEnabled(value => !value) }}
    >
      <Layout {...previewProps} />
      <div className={toolbarStyles.stack}>
        {enabled ? (
          <FloatingToolbar
            label={isRu ? 'Просмотр слотов' : 'Slot preview'}
            kind="slots"
          >
            <Link className={toolbarStyles.link} href={isRu ? '/' : '/'}>
              {isRu ? 'Слоты главной страницы' : 'Homepage slots'}
              <span aria-hidden="true">→</span>
            </Link>
            <button
              type="button"
              className={toolbarStyles.action}
              aria-label={isRu ? 'Выйти из режима просмотра слотов' : 'Exit slot preview'}
              onClick={() => setEnabled(false)}
            >
              {isRu ? 'Выход' : 'Exit'}
            </button>
          </FloatingToolbar>
        ) : null}
        <CssModificationIndicator />
      </div>
    </SlotPreviewContext.Provider>
  );
}