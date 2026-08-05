import { Link } from '@rspress/core/theme';
import styles from './VersionBadge.module.scss';

export interface VersionBadgeProps {
  version: string;
}

export function VersionBadge({ version }: VersionBadgeProps) {
  const normalizedVersion = version.trim().replace(/^v/i, '');

  return (
    <div className={`${styles.wrapper} rp-not-doc`}>
      <span className={styles.badge}>
        <Link
          href={`https://github.com/web-infra-dev/rspress/releases/tag/v${normalizedVersion}`}
        >
          Добавлено в v{normalizedVersion}
        </Link>
      </span>
    </div>
  );
}
