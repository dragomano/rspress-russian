import {
  Badge as BasicBadge,
  Tag as BasicTag,
} from '@rspress/core/theme-original';

export const Tag = ({ tag }: { tag?: string }) => {
  if (!tag) {
    return null;
  }

  if (tag === 'new') {
    return <BasicBadge text="Новинка" type="tip" />;
  }

  if (tag === 'experimental') {
    return <BasicBadge text="Экспериментально" type="warning" />;
  }

  if (tag === 'deprecated') {
    return <BasicBadge text="Устарело" type="danger" />;
  }

  if (tag === 'updated') {
    return <BasicBadge text="Обновлено" type="info" />;
  }

  return <BasicTag tag={tag} />;
};
