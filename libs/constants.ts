/**
 * Boot Stages
 *
 * Available Boot Stages Enum.
 *
 * @inner
 * @export
 * @enum {number}
 */
export enum BOOT_STAGES {
  BOOT_DEPENDENCIES,
  INITIALIZE_MIDDLEWARES,
  APPLICATION,
  AFTER_APPLICATION_MIDDLEWARES,
  START
}

/**
 * Boot Order Constant
 * @type Array<BOOT_STAGES>
 * @constant
 */
export const BOOT_ORDER = [
  BOOT_STAGES.BOOT_DEPENDENCIES,
  BOOT_STAGES.INITIALIZE_MIDDLEWARES,
  BOOT_STAGES.APPLICATION,
  BOOT_STAGES.AFTER_APPLICATION_MIDDLEWARES,
  BOOT_STAGES.START
];

export const STAGES_INIT = {
  [BOOT_STAGES.BOOT_DEPENDENCIES]: [],
  [BOOT_STAGES.INITIALIZE_MIDDLEWARES]: [],
  [BOOT_STAGES.APPLICATION]: [],
  [BOOT_STAGES.AFTER_APPLICATION_MIDDLEWARES]: [],
  [BOOT_STAGES.START]: []
};

export const BOOT_STAGES_KEY = 'boot:stage-settings';
export const ROUTER_HANDLERS_KEY = 'app:routes:handlers';
export const ROUTER_MIDDLEWARES_KEY = 'app:routes:middlewares';
export const REGISTERED_MODEL_KEY = 'app:models:registered';
export const REGISTERED_MODULE_KEY = 'app:modules:registered';
