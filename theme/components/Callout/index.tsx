import { type CalloutProps, Callout as BasicCallout } from '@rspress/core/theme-original';

const CALLOUT_TITLES: Record<string, string> = {
  Note: 'Заметка',
  Tip: 'Совет',
  Warning: 'Предупреждение',
  Danger: 'Опасно',
  Info: 'Информация',
  Details: 'Спойлер',
};

export const Callout = ({ type, title, children }: CalloutProps) => {
  const typeKey = type.charAt(0).toUpperCase() + type.slice(1);
  const defaultTitle = CALLOUT_TITLES[typeKey];
  const translatedTitle = title ? (CALLOUT_TITLES[title] ?? title) : defaultTitle;

  return (
    <BasicCallout type={type} title={translatedTitle}>
      {children}
    </BasicCallout>
  );
};
