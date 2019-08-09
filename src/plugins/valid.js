import Vue from 'vue';
import VeeValidate from 'vee-validate'; // 表单校验插件

const config = {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages: {
        phone: () => '请输入正确的11位手机号',
        smsCode: () => '请输入正确的4位数字验证码',
        name: filed => `${filed}必须由2-10个汉字组成`,
        nickName: () => '昵称必须由2-6个数字、字母或汉字组成',
        drawPwd: () => '取款密码必须是数字或字母组成的6位字符',
        bankCard: () => '请输入正确的银行卡号',

        _default: field => `${field}无效`,
        after: (field, [target]) => `${field}必须在${target}之后`,
        alpha_dash: field => `${field}能够包含字母数字字符、破折号和下划线`,
        alpha_num: field => `${field}只能包含字母数字字符`,
        alpha_spaces: field => `${field}只能包含字母字符和空格`,
        alpha: field => `${field}只能包含字母字符`,
        before: (field, [target]) => `${field}必须在${target}之前`,
        between: (field, [min, max]) => `${field}必须在${min}与${max}之间`,
        confirmed: (field, [confirmedField]) =>
          `${field}与${confirmedField}不一致`,
        credit_card: field => `${field}格式错误`,
        date_between: (field, [min, max]) => `${field}必须在${min}和${max}之间`,
        date_format: (field, [format]) => `${field}必须符合${format}格式`,
        decimal: (field, [decimals = '*'] = []) =>
          `${field}必须是数字，且保留${decimals === '*' ? '' : decimals}位小数`,
        digits: (field, [length]) => `${field}必须是${length}个数字`,
        dimensions: (field, [width, height]) =>
          `${field}必须在${width}像素与${height}像素之间`,
        email: field => `${field}不是一个有效的邮箱`,
        ext: field => `${field}不是一个有效的文件`,
        image: field => `${field}不是一张有效的图片`,
        included: field => `${field}不是一个有效值`,
        integer: field => `${field}必须是整数`,
        ip: field => `${field}不是一个有效的地址`,
        length: (field, [length, max]) => {
          if (max) {
            return `${field}长度必须在${length}到${max}之间`;
          }
          return `${field}长度必须为${length}`;
        },
        max: (field, [length]) => `${field}不能超过${length}个字符`,
        max_value: (field, [max]) => `${field}必须小于或等于${max}`,
        mimes: field => `${field}不是一个有效的文件类型`,
        min: (field, [length]) => `${field}不能少于${length}个字符`,
        min_value: (field, [min]) => `${field}必须大于或等于${min}`,
        excluded: field => `${field}不是一个有效值`,
        numeric: field => `${field}只能包含数字字符`,
        regex: field => `${field}格式无效`,
        required: field => `${field}不能为空`,
        size: (field, [size]) => `${field}必须小于${formatFileSize(size)}`,
        url: field => `${field}不是一个有效的url`
      }
    }
  },
  events: ''
};

Vue.use(VeeValidate, config);
