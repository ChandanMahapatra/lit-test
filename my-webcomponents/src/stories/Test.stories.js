import { Test } from './Test';

export default {
  title: 'Example/Test',
};

const Template = (args) => Test(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
