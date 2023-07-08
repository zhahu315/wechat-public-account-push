/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '早上好,汤小o',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '早上好,汤小o',
    desc: `
    🗓️{{date.DATA}}\n
    城市：{{city.DATA}}\n
    天气☁️：{{weather.DATA}} \n
    温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}} \n
    湿度：{{shidu.DATA}}\n
    空气质量：{{aqi.DATA}}\n
    温馨提示：{{notice.DATA}}\n
    假日提醒: 🏖️{{holidaytts.DATA}}\n
    今日运势：{{comprehensive_horoscope.DATA}}\n
    ⭐{{wealth_horoscope.DATA}}\n
    ❤️{{love_horoscope.DATA}}\n
    🫁{{healthy_horoscope.DATA}}\n
    📚{{career_horoscope.DATA}}\n
    -------------------------\n
    值得纪念：今天是我们破处的第{{pochu_day.DATA}}天 \n
    🎂{{wx_birthday_0.DATA}} \n
    🎂{{wx_birthday_1.DATA}} \n
    夸夸老婆：\n
    💌{{earthy_love_words.DATA}} \n
    今日朋友圈文案：\n
    😋{{moment_copyrighting.DATA}} \n
    和{{poetry_author.DATA}}学诗词：{{poetry_content.DATA}}\n\n
    今日热搜:\n
    🔥{{tian_api_network_hot.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG