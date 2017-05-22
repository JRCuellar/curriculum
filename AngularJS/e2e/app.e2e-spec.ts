import { AngularJSPage } from './app.po';

describe('angular-js App', function() {
  let page: AngularJSPage;

  beforeEach(() => {
    page = new AngularJSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
