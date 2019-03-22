import DEFAULT from '@config/envs/app.default';
import MetaData from '@core/classes/MetaData';
import { REGISTERED_MODEL_KEY } from '@core/constants';
import * as _ from 'lodash';

class Settings {
  static getInstance() {
    return Settings.instance;
  }

  static getModel(modelName: any) {
    const registeredModels = MetaData.get(REGISTERED_MODEL_KEY, Settings.getInstance()) || {};
    return _.get(registeredModels, modelName);
  }

  private static instance: Settings;
  private readonly options;

  constructor(options = {}) {
    if (Settings.instance) {
      return Settings.instance;
    }

    this.options = Object.assign({}, DEFAULT, options);
    Settings.instance = this;
  }

  getOptions() {
    return this.options;
  }

  get(settingName) {
    return _.get(this.options, settingName, null);
  }

  set(settingName, value) {
    _.set(this.options, settingName, value);
  }
}

export default Settings;
