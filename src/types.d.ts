declare interface Window {
  jQuery: JQueryStatic;
  $: JQueryStatic;
  APP_SCOPE: {
    init: () => void
  }
}