import { HolamundoPage } from './app.po';

describe('holamundo App', () => {
  let page: HolamundoPage;

  beforeEach(() => {
    page = new HolamundoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
