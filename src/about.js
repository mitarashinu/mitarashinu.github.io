import m from 'mithril';
import data from './data/about.json';

export default {
  view: function(vnode) {
    return m('div#about.container', [
      m('img[src=static/img/about.jpg]'),
      m('div#weare', data.description)
    ]);
  }
};
