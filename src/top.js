import m from 'mithril';
import data1 from './data/top-01.json';

export default {
  oninit: function(vnode) {
    vnode.state.datas = data1.data;
  },
  view: function(vnode) {
    return m('div#news', vnode.state.datas.map(data => {
      return m('div.news-container', [
        m('h4.news-date', data.date),
        m('h5.news-title', m('i.material-icons', 'turned_in'), data.title),
        m('div.news-text', data.text)
      ]);
    }));
  }
};
