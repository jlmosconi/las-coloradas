import { LasColoradasPage } from './app.po';

describe('las-coloradas App', () => {
  let page: LasColoradasPage;

  beforeEach(() => {
    page = new LasColoradasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
