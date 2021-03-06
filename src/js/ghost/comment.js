import {loadScripts} from '../untils';

export const comment = () => {
  if (document.getElementById('vcomments') !== null) {
    loadScripts([
      {
        id: 'leancloud-storage-js',
        url: `https://cdn.jsdelivr.net/npm/leancloud-storage@4.2.0/dist/av-min.js`
      },
      {
        id: 'valine-js',
        url: `https://cdn.jsdelivr.net/npm/valine@1.3.10/dist/Valine.min.js`
      }
    ]).then(() => {
      // eslint-disable-next-line no-undef
      new Valine({
        el: '#vcomments',
        appId: 'REGleanCloudAppIdREG',
        appKey: 'REGleanCloudAppKeyREG',
        serverURLs: 'REGleanCloudServerURLREG',
        notify: true,
        verify: true,
        avatar: 'mm',
        visitor: true,
        highlight: true,
        recordIP: true,
        placeholder: '请您理智发言，共建美好社会！',
        path: window.location.pathname
      });
    });
  }
};

export default comment();
