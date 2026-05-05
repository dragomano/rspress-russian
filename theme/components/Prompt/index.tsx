import { type PromptProps, Prompt as BasicPrompt } from '@rspress/core/theme-original';

export const Prompt = ({ custom, ...props }: PromptProps) => {
  const description = props.description ?? '';
  const title = props.title ?? 'Промпт для агента';
  const eyebrow = props.eyebrow ?? 'Для вашего агента';
  const defaultCollapsed = props.defaultCollapsed ?? true;
  const prompt = props.prompt ?? '';

  return (
    <BasicPrompt
      custom={custom}
      description={description}
      title={title}
      eyebrow={eyebrow}
      defaultCollapsed={defaultCollapsed}
      prompt={prompt}
    >
      {props.children}
    </BasicPrompt>
  );
}
