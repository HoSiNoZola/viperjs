import exception from './zh-CN/exception';
import login from './zh-CN/login';
import menu from './zh-CN/menu';
import pwa from './zh-CN/pwa';
import systemsetting from './zh-CN/systemsetting';
import core from './zh-CN/core';
import realtimecard from './zh-CN/realtimecard';
import payloadandhandler from './zh-CN/payloadandhandler';
import webdelivery from './zh-CN/webdelivery';
import filemsf from './zh-CN/filemsf';

export default {
  ...exception,
  ...login,
  ...menu,
  ...pwa,
  ...systemsetting,
  ...core,
  ...realtimecard,
  ...payloadandhandler,
  ...webdelivery,
  ...filemsf,
};
