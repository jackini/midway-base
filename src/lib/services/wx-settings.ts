/*
 * @Author: 吴占超
 * @Date: 2019-05-25 10:24:02
 * @Last Modified by: 吴占超
 * @Last Modified time: 2019-05-25 12:35:22
 * 微信设置
 */
// import { WxSettings } from '@models/wx-settings.model.ts';
import { inject, provide } from 'midway';
import { IWxSettingsModel } from '../models/wx-settings.model';

export interface IWxSettingsService extends WxSettingsService {}

@provide()
export class WxSettingsService {
  @inject('WxSettingsModel')
  private WxSettings: IWxSettingsModel;

  async find() {
    return this.WxSettings.findAll();
  }
}