describe( 'API', function() {

  it( 'has a title', function() {

    browser.get('protractor/#/api');

    var title = element.all(by.css('h3')).first();

    expect(title.getText()).toContain('Protractor API');

  });

  it( 'search for an existing protractor method', function() {

    browser.get('protractor/#/api');

    var searchField = element(by.model('searchTerm'));
    var firstSidebarItem = element(by.repeater('item in items').row(0));
    var firstSidebarLink = firstSidebarItem.element(by.css('a'));
    var apiSearchedTitle = element(by.css('.api-title'));

    searchField.sendKeys('repeater');
    firstSidebarLink.click();

    expect(apiSearchedTitle.getText()).toContain('by.repeater');

  });

});
