export class ScriptLoader {

  public static loadjQuery(): void {
    const jQueryURL = 'http://code.jquery.com/jquery-1.12.4.min.js';

    ScriptLoader.loadScript(jQueryURL, () => {
        //window.jQuery will get mangled here, dont change jQuery to anything else
        const jQ = jQuery.noConflict(true);
        window['jQuery'] = jQ;
        window['$'] = jQ;
        window.APP_SCOPE.init();
    });
  }


  // protected static isExpectedVersion(oldVersion: string): boolean {
  //     // Space in selector breaks on v1.9: $(' <div>')
  //     const minVersion = '1.10.0';
  //     const minParts = minVersion.split('.').map((e) => parseInt(e));
  //     const oldParts = oldVersion.split('.').map((e) => parseInt(e));
  //     oldParts[0] = (oldParts[0] || 0);
  //     oldParts[1] = (oldParts[1] || 0);
  //     oldParts[2] = (oldParts[2] || 0);

  //     if (oldParts[0] > minParts[0]) return true;
  //     if (oldParts[0] < minParts[0]) return false;

  //     if (oldParts[1] > minParts[1]) return true;
  //     if (oldParts[1] < minParts[1]) return false;

  //     if (oldParts[2] > minParts[2]) return true;
  //     if (oldParts[2] < minParts[2]) return false;

  //     return true;
  // }


  public static loadScript(url: string, callback: Function): void {
      const script: any = document.createElement('script');
      script.type = 'text/javascript';

      if (script.readyState) {
          script.onreadystatechange = () => {
              if (script.readyState === 'loaded' || script.readyState === 'complete') {
                  script.onreadystatechange = null;
                  callback();
              }
          };
      } else {
          script.onload = callback;
      }

      script.src = url;

      document.getElementsByTagName('head')[0].appendChild(script);
  }

}
