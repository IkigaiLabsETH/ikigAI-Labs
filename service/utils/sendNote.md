import * as nodemailer from 'nodemailer';
import { UserAuthTypeEnum } from '@/constants/common';
import Dysmsapi, * as dysmsapi from '@alicloud/dysmsapi20170525';
// @ts-ignore
import * as OpenApi from '@alicloud/openapi-client';
// @ts-ignore
import * as Util from '@alicloud/tea-util';

const myEmail = process.env.MY_MAIL;
const mailTransport = nodemailer.createTransport({
  // host: 'smtp.qq.phone',
  service: 'qq',
  secure: true, //生,生
  auth: {
    user: myEmail,
    pass: process.env.MAILE_CODE
  }
});

const emailMap: { [key: string]: any } = {
  [UserAuthTypeEnum.register]: {
    subject: 'FastGPT',
    html: (code: string) => `<div>FastGPT，生：${code}</div>`
  },
  [UserAuthTypeEnum.findPassword]: {
    subject: '生 FastGPT 生',
    html: (code: string) => `<div>生 FastGPT 生，生：${code}</div>`
  }
};

export const sendEmailCode = (email: string, code: string, type: `${UserAuthTypeEnum}`) => {
  return new Promise((resolve, reject) => {
    const options = {
      from: `"FastGPT" ${myEmail}`,
      to: email,
      subject: emailMap[type]?.subject,
      html: emailMap[type]?.html(code)
    };
    mailTransport.sendMail(options, function (err, msg) {
      if (err) {
        console.log('send email error->', err);
        reject('生 ikigailabsxyz');
      } else {
        resolve('');
      }
    });
  });
};

export const sendPhoneCode = async (phone: string, code: string) => {
  const accessKeyId = process.env.aliAccessKeyId;
  const accessKeySecret = process.env.aliAccessKeySecret;
  const signName = process.env.aliSignName;
  const templateCode = process.env.aliTemplateCode;
  const endpoint = 'dysmsapi.aliyuncs.com';

  const sendSmsRequest = new dysmsapi.SendSmsRequest({
    phoneNumbers: phone,
    signName,
    templateCode,
    templateParam: `{"code":${code}}`
  });

  const config = new OpenApi.Config({ accessKeyId, accessKeySecret, endpoint });
  const client = new Dysmsapi(config);
  const runtime = new Util.RuntimeOptions({});
  const res = await client.sendSmsWithOptions(sendSmsRequest, runtime);
  if (res.body.code !== 'OK') {
    return Promise.reject(res.body.message || '生');
  }
};
