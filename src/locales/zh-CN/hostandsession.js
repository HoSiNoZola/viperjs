export default {


  'app.hostandsession.session.SessionInfo': '权限信息',
  'app.hostandsession.session.FileSession': '文件管理',
  'app.hostandsession.session.Route': '内网路由',
  'app.hostandsession.session.PortFwd': '端口转发',
  'app.hostandsession.session.Transport': '传输协议',
  'app.hostandsession.session.SessionIO': '命令终端',
  'app.hostandsession.session.HostRuningInfo': '运行信息',
  'app.hostandsession.session.DestorySession': '删除权限',

  'app.hostandsession.host.HostInfo': '主机信息',
  'app.hostandsession.host.PortService': '开放端口',
  'app.hostandsession.host.Vulnerability': '已知漏洞',
  'app.hostandsession.host.DestoryHost': '删除主机',

  'app.hostandsession.tab.Notices': '实时输出',
  'app.hostandsession.tab.JobList': '任务列表',
  'app.hostandsession.tab.PayloadAndHandler': '监听载荷',
  'app.hostandsession.tab.FileMsf': '文件列表',
  'app.hostandsession.tab.Network': '网络拓扑',
  'app.hostandsession.tab.AutoRobot': '自动编排',
  'app.hostandsession.tab.MsfSocks': '内网代理',
  'app.hostandsession.tab.Credential': '凭证列表',
  'app.hostandsession.tab.LazyLoader': '钓鱼管理',
  'app.hostandsession.tab.BotScan': '全网扫描',
  'app.hostandsession.tab.SystemSetting': '平台设置',

  'app.hostandsession.low': '低',
  'app.hostandsession.medium': '中',
  'app.hostandsession.high': '高',
  'app.hostandsession.system': '系统',
  'app.hostandsession.unknown': '未知',
  'app.hostandsession.yes': '是',
  'app.hostandsession.no': '否',
  'app.hostandsession.open': '打开',
  'app.hostandsession.close': '关闭',
  'app.hostandsession.default': '默认',
  'app.hostandsession.alwaysnotify': '总是通知',
  'app.hostandsession.processoper': '进程操作',
  'app.hostandsession.sessioninfo.heartbeat': '心跳',
  'app.hostandsession.sessioninfo.hostip': '主机IP',
  'app.hostandsession.sessioninfo.adminright': '管理员权限',
  'app.hostandsession.sessioninfo.localadmin': '本地管理员组',
  'app.hostandsession.sessioninfo.user': '用户',
  'app.hostandsession.sessioninfo.is_uac_enable': 'UAC状态',
  'app.hostandsession.sessioninfo.uac_level': 'UAC等级',
  'app.hostandsession.sessioninfo.integrity': '完整性',
  'app.hostandsession.sessioninfo.is_in_domain': '域用户',
  'app.hostandsession.sessioninfo.doamin': '域',
  'app.hostandsession.sessioninfo.computer': '主机名',
  'app.hostandsession.sessioninfo.load_powershell': 'Powershell插件',
  'app.hostandsession.sessioninfo.load_python': 'Python插件',
  'app.hostandsession.sessioninfo.loaded': '已加载',
  'app.hostandsession.sessioninfo.unload': '未加载',
  'app.hostandsession.sessioninfo.tunnel_peer': '远程端口',
  'app.hostandsession.sessioninfo.tunnel_local': '本地端口',
  'app.hostandsession.sessioninfo.tunnel_peer_locate': '地理信息',
  'app.hostandsession.sessioninfo.tunnel_peer_asn': '运营商',
  'app.hostandsession.sessioninfo.via_exploit': '模块',
  'app.hostandsession.sessioninfo.via_payload': '载荷',
  'app.hostandsession.sessioninfo.update': '更新信息',
  'app.hostandsession.sessioninfo.processes': '进程列表',
  'app.hostandsession.sessioninfo.pname': '进程',
  'app.hostandsession.sessioninfo.ppath': '进程路径',

  'app.hostandsession.sessionio.help': '显示帮助',
  'app.hostandsession.sessionio.keyscan_start': '开始键盘记录',
  'app.hostandsession.sessionio.keyscan_dump': '获取键盘记录',
  'app.hostandsession.sessionio.keyscan_stop': '关闭键盘记录',
  'app.hostandsession.sessionio.screenshot': '屏幕截图',
  'app.hostandsession.sessionio.idletime': '用户离开时间',
  'app.hostandsession.sessionio.getsystem': '获取系统权限',
  'app.hostandsession.sessionio.loadunhook': '加载Unhook插件',
  'app.hostandsession.sessionio.loadpowershell': '加载Powershell插件',
  'app.hostandsession.sessionio.loadpython': '加载Python插件',
  'app.hostandsession.sessionio.python_reset': '重置Python插件',

  'app.hostandsession.msfroute.subnet': '子网',
  'app.hostandsession.msfroute.subnet.rule': '请输入子网(10.10.10.0)',
  'app.hostandsession.msfroute.netmask': '掩码',
  'app.hostandsession.msfroute.netmask.rule': '请输入掩码',
  'app.hostandsession.msfroute.auto': '自动',

  'app.hostandsession.portfwd.forword.lport': '本地端口(监听)',
  'app.hostandsession.portfwd.forword.lport.rule': '请输入本地监听端口',
  'app.hostandsession.portfwd.forword.lport.ph': 'VPS端口',
  'app.hostandsession.portfwd.forword.rhost': '远程IP(目标)',
  'app.hostandsession.portfwd.forword.rhost.rule': '请输入远程IP',
  'app.hostandsession.portfwd.forword.rhost.ph': '内网IP/127.0.0.1',
  'app.hostandsession.portfwd.forword.rport': '远程端口(目标)',
  'app.hostandsession.portfwd.forword.rport.rule': '请输入远程端口',
  'app.hostandsession.portfwd.forword.rport.ph': '目标端口',
  'app.hostandsession.portfwd.forword.doc.1': '将VPS的网络端口转发到内网的某IP某端口.',
  'app.hostandsession.portfwd.forword.doc.2': '例如:通过192.168.3.13的Session将VPS的10.10.10.10:2000转发到内网192.168.3.14:3389.本地端口(监听):2000\n远程IP(目标):192.168.3.14 远程端口(目标):3389',

  'app.hostandsession.portfwd.reverse.lhost': '本地IP(目标)',
  'app.hostandsession.portfwd.reverse.lhost.rule': '请输入本地目标IP',
  'app.hostandsession.portfwd.reverse.lhost.ph': 'VPSIP/目标IP',
  'app.hostandsession.portfwd.reverse.lport': '本地端口(目标)',
  'app.hostandsession.portfwd.reverse.lport.rule': '请输入本地端口',
  'app.hostandsession.portfwd.reverse.lport.ph': '目标端口',
  'app.hostandsession.portfwd.reverse.rport': '远程端口(监听)',
  'app.hostandsession.portfwd.reverse.rport.rule': '请输入远程端口',
  'app.hostandsession.portfwd.reverse.rport.ph': '监听端口',
  'app.hostandsession.portfwd.reverse.doc.1': '将内网的某IP某端口转发到VPS的网络端口.',
  'app.hostandsession.portfwd.reverse.doc.2': '例如:通过192.168.3.13的session将内网192.168.3.13:20000转发到10.10.10.10:2000.\n本地IP(目标):10.10.10.10 本地端口(监听):2000 远程端口(监听):20000.',
  'app.hostandsession.portfwd.reverse.doc.3': '(10.10.10.10:2000开启handler监听,192.168.3.14连接192.168.3.13:20000生成反向shell)',

  'app.hostandsession.transport.comm_timeout': '超时时间(秒)',
  'app.hostandsession.transport.retry_total': '重连次数',
  'app.hostandsession.transport.retry_wait': '重连间隔(秒)',
  'app.hostandsession.transport.session_exp': '强制过期(秒)',
  'app.hostandsession.transport.handler': '监听配置',
  'app.hostandsession.transport.handler.rule': '请选择监听',
  'app.hostandsession.transport.update': '切换',
  'app.hostandsession.transport.update.tip': '确认切换Session传输,此操作会删除当前Session?',
  'app.hostandsession.transport.sleep': '休眠',
  'app.hostandsession.transport.sleep.rule': '请选择休眠时间',
  'app.hostandsession.transport.1min': '1分钟',
  'app.hostandsession.transport.1hour': '1小时',
  'app.hostandsession.transport.6hoour': '6小时',
  'app.hostandsession.transport.12hour': '12小时',
  'app.hostandsession.transport.24hour': '24小时',
};
