import React from 'react';
import { mount } from 'enzyme';
import { DeckItem } from './deck-item';

const wrapComponent = (props = {}) => {
  const defaultProps = {
    id: '',
    title: '',
    rating: 10,
    ratingCount: 3,
    onSelect: (id: string) => {},
  };

  return mount(<DeckItem {...defaultProps} {...props} />);
};

describe('<DeckItem /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should properly calculate rating summary', () => {
    const wrapper = wrapComponent({ rating: 17, ratingCount: 4 });

    const ratingSummary = wrapper.find('span.rating-summary');

    const activeStars = wrapper.find('svg.star--active');

    expect(ratingSummary.text()).toEqual('4.3');
    expect(activeStars).toHaveLength(4);
  });

  test('should invoke onSelect function if provider', () => {
    const onSelect = jest.fn();
    const wrapper = wrapComponent({ onSelect, id: '#deck-id' });

    const deckItem = wrapper.find('div.deck-item');

    deckItem.simulate('click');

    expect(onSelect).toHaveBeenCalledWith('#deck-id');
  });

  test('should add proper class if deck is selected', () => {
    const wrapper = wrapComponent({ selected: true });

    const deckItem = wrapper.find('div.deck-item');

    expect(deckItem.hasClass('deck-item--selected')).toBeTruthy();
  });
});
