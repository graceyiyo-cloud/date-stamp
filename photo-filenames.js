(function(root) {
  'use strict';
  function normalizeStore(value) {
    return String(value || '').trim().replace(/\s+/g, ' ');
  }
  function encodeStore(value) {
    return normalizeStore(value).replace(/[<>:"/\\|?*%\x00-\x1f]/g, function(char) {
      return '%' + char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0');
    });
  }
  function create(store, status, timestamp) {
    const part = encodeStore(store) || '未指定店名';
    return '工程紀錄_' + part + '_' + status + '_' + timestamp + '.jpg';
  }
  const api = {normalizeStore, encodeStore, create};
  root.EngineeringPhotoNames = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
