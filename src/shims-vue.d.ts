declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module "alt" {
  import "@altv/types-webview";
  export default alt;
}
