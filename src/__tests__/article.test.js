import Article from '../Article';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('Article component renders the article headline', () => {
  const article = {
    id: "technology/2018/feb/16/uber-set-up-24-hour-incident-hotline-uk-customers-report-police",
    webPublicationDate: "2018-02-16T12:45:48Z",
    webTitle: "Uber to set up 24-hour hotline for UK customer",
    webUrl: "https://www.theguardian.com/technology/2018/feb/16/uber-set-up-24-hour-incident-hotline-uk-customers-report-police",
  }
  const wrapper = shallow(<Article article={article} />)
  const div = wrapper.find('.article-headline');
  expect(div.text()).toBe("Uber to set up 24-hour hotline for UK customer");
});