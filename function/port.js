const port = {};

module.exports = port;

// 端口分配规则：每组功能分配10的倍数个，初始时分配10个，不够用时时直接再分配10个

port.activate = {};
port.activate.email = 60101;

port.bind = {};
port.bind.github = 60111;
port.bind.qq = 60112;
port.bind.wx = 60113;

port.exist = {};
port.exist.email = 60121;
port.exist.nickname = 60122;
port.exist.tel = 60123;
port.exist.username = 60124;

port.get = {};
port.get.profile = 60131;

port.sign = {};
port.sign.in = {};
port.sign.in.github = 60141;
port.sign.in.password = 60142;
port.sign.in.qq = 60143;
port.sign.in.wx = 60144;

port.sign.up = {};
port.sign.up.email = 60151;

port.unbind = {};
port.unbind.github = 60161;
port.unbind.qq = 60162;
port.unbind.wx = 60163;

port.update = {};
port.update.email = 60171;
port.update.nickname = 60172;
port.update.password = 60173;
port.update.tel = 60174;

// console.log(port);