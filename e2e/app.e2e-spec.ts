import { AngularTwoAppPage } from './app.po';

describe('angular-two-app App', function() {
  let page: AngularTwoAppPage;

  beforeEach(() => {
    page = new AngularTwoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
