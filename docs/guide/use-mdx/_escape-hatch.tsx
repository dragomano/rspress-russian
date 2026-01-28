import { getCustomMDXComponent } from '@rspress/core/theme';

export default () => {
  const { p: P, code: Code } = getCustomMDXComponent();
  return (
    <P className="rp-doc">
      Это содержимое в tsx, но стили такие же, как в документации, например,
      <Code>@rspress/core</Code>. Однако этот текст с className="rp-not-doc"
      <Code className="rp-not-doc">@rspress/core</Code> не будет стилизоваться
    </P>
  );
};
