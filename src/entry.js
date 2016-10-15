import m from 'mithril';
import Top from './top.js';
import About from './about.js';
import Video from './video.js';
import Item from './item.js';


const Menu = {
  oninit: function(vnode) {
    vnode.state.onclick = function(ev) {
      $('.button-collapse').sideNav('hide');
    };
  },
  oncreate: function(vnode) {
    const route = m.route.get().replace('/', '');
    if (vnode.attrs.title === (route || 'top')) {
      vnode.dom.setAttribute('class', 'active');
    }
  },
  onupdate: function(vnode) {
    const route = m.route.get().replace('/', '');
    if (vnode.attrs.title === (route || 'top')) {
      vnode.dom.setAttribute('class', 'active');
    } else {
      vnode.dom.removeAttribute('class');
    }
  },
  view: function(vnode) {
    const title = vnode.attrs.title;
    return m('li', {onclick: vnode.state.onclick}, m(
      `a#menu-link-${title}.waves-effect.waves-light[href=/${title === 'top' ? '' : title}]`,
      {oncreate: m.route.link},
      title
    ));
  }
}

const Side = {
  oninit: function(vnode) {
    vnode.state.li = function() {
      return ['top', 'about', 'video', 'item'].map(title => m(Menu, {title}));
    };
  },
  oncreate: function(vnode) {
    $('.button-collapse').sideNav();
  },
  view: function(vnode) {
    const li = vnode.state.li;
    return  m('div.navbar-fixed', [
      m('nav.z-depth-0', [
        m('div.nav-wrapper', [
          m('img#nav-logo[src=static/img/header.png]'),
          m('a.button-collapse[data-activates=mobile-menu]', [
            m('i.material-icons.humberger', {style: {color: '#333'}}, 'menu')
          ]),
          m('ul#menu.right.hide-on-med-and-down', li()),
          m('ul#mobile-menu.side-nav', li())
        ])
      ])
    ]);
  }
};

const Layout = {
  view: function(vnode) {
    return m('div#wrapper', [
      m(Side),
      m('div#inner.container', [
        m('div#content', vnode.children)
      ])
    ]);
  }
};


const region = document.getElementsByTagName('main')[0];

m.route(region, '/', {
  '/': {
    render: function() {
      return m(Layout, m(Top));
    }
  },
  '/about': {
    render: function() {
      return m(Layout, m(About));
    }
  },
  '/video': {
    render: function() {
      return m(Layout, m(Video));
    }
  },
  '/item': {
    render: function() {
      return m(Layout, m(Item));
    }
  }
});
