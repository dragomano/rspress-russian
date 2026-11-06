import {
  DocLayout as BasicDocLayout,
  HomeHero as BasicHomeHero,
  HomeLayout as BasicHomeLayout,
  PackageManagerTabs,
  type DocLayoutProps,
  type HomeHeroProps,
  type HomeLayoutProps,
} from '@rspress/core/theme-original';
import { NavIcon } from '@rstack-dev/doc-ui/nav-icon';
import { CssModificationProvider } from '../components/CssModificationContext';
import { CssStyleSync } from '../components/CssStyleSync';
import { SlotPreview, SlotPreviewLayout } from '../components/SlotPreview';
import { Callout, Prompt, Tag } from './components';
import { BlogBackButton } from './components/BlogBackButton';
import { HeroInteractive } from './components/HeroInteractive';
import { HomeSections } from './components/HomeSections';
import { ToolStack } from './components/ToolStack';
import './index.css';

function HomeLayout(props: HomeLayoutProps) {
  return (
    <BasicHomeLayout
      {...props}
      afterFeatures={
        <SlotPreview name="afterFeatures">
          {props.afterFeatures}
          <HomeSections />
          <ToolStack />
        </SlotPreview>
      }
      afterHeroActions={
        <div className="rp-doc home-install">
          <PackageManagerTabs command="create rspress@latest" />
        </div>
      }
    />
  );
}

const HomeHero = ({ image: _, ...otherProps }: HomeHeroProps) => {
  return <BasicHomeHero image={<HeroInteractive />} {...otherProps} />;
};

const Layout = () => {
  return (
    <CssModificationProvider>
      <CssStyleSync />
      <SlotPreviewLayout beforeNavTitle={<NavIcon />} />
    </CssModificationProvider>
  );
};

const DocLayout = (props: DocLayoutProps) => {
  return (
    <BasicDocLayout
      {...props}
      beforeDocContent={
        <SlotPreview name="beforeDocContent">
          <BlogBackButton />
          {props.beforeDocContent}
        </SlotPreview>
      }
    />
  );
};

export * from '@rspress/core/theme-original';
export { DocLayout, HomeHero, HomeLayout, Layout, Callout, Prompt, Tag };
