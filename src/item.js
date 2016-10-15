import m from 'mithril';
import itemData from './data/item.json';


export default {
  oninit: function(vnode) {
    vnode.state.datas = itemData.data;
  },
  oncreate: function(vnode) {
    $('.materialboxed').materialbox();
  },
  view: function(vnode) {
    const datas = vnode.state.datas;
    return m('div#item', datas.map(function(data) {
      return m('div.item-container', [
        m('b', data.name),
        m('span', ` ¥${data.value}`),
        m('br'),
        m('span', data.description),
        m(`img.item-image.materialboxed[src=static/img/${data.img}]`)
      ]);
    }));
  }
};
