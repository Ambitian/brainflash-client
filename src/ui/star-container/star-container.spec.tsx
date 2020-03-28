import React from 'react';
import { mount } from 'enzyme';
import { StarContainer } from './star-container';

const defaultProps = {
  activeStarCount: 3,
};

const wrapComponent = (props = {}) => {
  return mount(<StarContainer {...defaultProps} {...props} />);
};

describe('<StarContainer />', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should add proper class to active stars', () => {
    const activeStarCount = 4;

    const wrapper = wrapComponent({ activeStarCount });

    const activeStars = wrapper.find('svg.star--active');

    expect(activeStars).toHaveLength(activeStarCount);
  });
});
