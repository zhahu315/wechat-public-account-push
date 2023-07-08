/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx4254deb69a9ce1e4',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '053e4cdb3e24ac681c370d01c2b237dc',

  PROVINCE: '江苏',
  CITY: '无锡',

  USERS: [
    {
      // 想要发送的人的名字
      name: '汤小圆',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqCLc6TEquil4XScpMvDvxC_Wimk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'QKUn53CTkTH6v8Vm1ojtK9ztKp0cXBbOwEvAgAg25oE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '02-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小张', year: '1998', date: '02-17',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '汤小圆', year: '1998', date: '02-20',
        },
        // {
        //   type: '生日', name: '小张', year: '1998', date: '03-15',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: '破处纪念日', date: '2022-01-23' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'PzkqmMZJQNBsuCSsLU5M8_65FcuEm7ifQFyYnlgWrTw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqCLc6QurH3v_va0SV8yp53A0I8g',
    }
  ],

}

module.exports = USER_CONFIG

