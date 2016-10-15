import m from 'mithril';
import videoData from './data/video.json';


const IFrame = {
  view: function(vnode) {
    const data = vnode.attrs.data;
    return m('div.video-wrapper', [
      m('div.video-container', [
        m(`iframe[width=560][height=315][src=https://www.youtube.com/embed/${data.url}][frameborder=0]`),
      ]),
      m('div', `${data.comment}`)
    ]);
  }
};

const Dummy = {
  // Component for lazy loading embed youtube video.
  view: function(vnode) {
    return m('div');
  }
}

const Row = {
  oninit: function(vnode) {
    vnode.state.clicked = m.prop(false);
    vnode.state.data = vnode.attrs.data;
    vnode.state.onclick = function(ev) {
      if(!vnode.state.clicked()) {
        vnode.state.clicked(true);
      }
    };
  },
  oncreate: function(vnode) {
    // NOTE: Collapsible elements only need initialization if they are added dynamically.
    // see: http://materializecss.com/collapsible.html
    $('.collapsible').collapsible();
  },
  view: function(vnode) {
    const data = vnode.state.data;
    return m('li', [
      m('div.collapsible-header', {onclick: vnode.state.onclick}, [m('i.material-icons', 'video_library')], `${data.date} ${data.at}`),
      m('div.collapsible-body', vnode.state.clicked() ? m(IFrame, {data}) : m(Dummy))
    ]);
  }
}

export default {
  oninit: function(vnode) {
    vnode.state.datas = videoData.data;
  },
  view: function(vnode) {
    return m('div#video', [
      m('ul.collapsible.z-depth-0[data-collapsible=accordion]', vnode.state.datas.map(function(data) {
        return m(Row, {data});
      }))
    ]);
  }
};
