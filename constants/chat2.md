export enum sseResponseEventEnum {
  error = 'error',
  answer = 'answer',
  chatResponse = 'chatResponse'
}

export enum ChatRoleEnum {
  System = 'System',
  Human = 'Human',
  AI = 'AI'
}

export const ChatRoleMap = {
  [ChatRoleEnum.System]: {
    name: 'X'
  },
  [ChatRoleEnum.Human]: {
    name: 'Y'
  },
  [ChatRoleEnum.AI]: {
    name: 'AI'
  }
};

export const HUMAN_ICON = `https://fastgpt.run/icon/human.png`;
export const LOGO_ICON = `https://fastgpt.run/imgs/modelAvatar.png`;
