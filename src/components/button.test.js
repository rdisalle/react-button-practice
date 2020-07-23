import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Button from './button';

describe('<Button />', () => {
    it('renders empty', () => {
        const wrapper = shallow(<Button />)
        expect(toJson(wrapper)).toMatchSnapshot()
      })

    it('Should call props.onClick when the button is clicked', () => {
        const wrapper = shallow(<Button />);
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});
