import $ from 'jquery'

export class App {
  init () {
    console.log($);
    const jTitle = $('title').first();
    console.log('extrected with jQuery: ', jTitle.text().trim());
    setTimeout(() => {
      this.doAjaxCall();
    }, 100)
  }

  doAjaxCall () {
    const payload = {
      "shop_id": 'someId',
      "beep": 'boop'
    }
    console.log("example payload that is not mangled", payload)
    // fetch('url', {
    //   body: JSON.stringify(payload)
    // })
  }
}