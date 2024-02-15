
class StickerManager {

  constructor(token) {
    this.token = token
  }


  getOperations() {
    const self = this;
    return {
      sendSticker: (objParam) => self.sendSticker(objParam),
      getStickerSet: (objParam) => self.getStickerSet(objParam),
      getCustomEmojiStickers: (objParam) => self.getCustomEmojiStickers(objParam),
      uploadStickerFile: (objParam) => self.uploadStickerFile(objParam),
      createNewStickerSet: (objParam) => self.createNewStickerSet(objParam),
      addStickerToSet: (objParam) => self.addStickerToSet(objParam),
      setStickerPositionInSet: (objParam) => self.setStickerPositionInSet(objParam),
      deleteStickerFromSet: (objParam) => self.deleteStickerFromSet(objParam),
      setStickerEmojiList: (objParam) => self.setStickerEmojiList(objParam),
      setStickerKeywords: (objParam) => self.setStickerKeywords(objParam),
      setStickerMaskPosition: (objParam) => self.setStickerMaskPosition(objParam),
      setStickerSetTitle: (objParam) => self.setStickerSetTitle(objParam),
      setStickerSetThumbnail: (objParam) => self.setStickerSetThumbnail(objParam),
      setCustomEmojiStickerSetThumbnail: (objParam) => self.setCustomEmojiStickerSetThumbnail(objParam),
      deleteStickerSet: (objParam) => self.deleteStickerSet(objParam),
    }
  }

  sendSticker(objParam) {
    return Utils.apiRequest(this.token, "sendSticker", objParam);
  }

  getStickerSet(objParam) {
    return Utils.apiRequest(this.token, "getStickerSet", objParam);
  }

  getCustomEmojiStickers(objParam) {
    return Utils.apiRequest(this.token, "getCustomEmojiStickers", objParam);
  }

  uploadStickerFile(objParam) {
    return Utils.apiRequest(this.token, "uploadStickerFile", objParam);
  }

  createNewStickerSet(objParam) {
    return Utils.apiRequest(this.token, "createNewStickerSet", objParam);
  }

  addStickerToSet(objParam) {
    return Utils.apiRequest(this.token, "addStickerToSet", objParam);
  }

  setStickerPositionInSet(objParam) {
    return Utils.apiRequest(this.token, "setStickerPositionInSet", objParam);
  }

  deleteStickerFromSet(objParam) {
    return Utils.apiRequest(this.token, "deleteStickerFromSet", objParam);
  }

  setStickerEmojiList(objParam) {
    return Utils.apiRequest(this.token, 'setStickerEmojiList', objParam)
  }

  setStickerKeywords(objParam) {
    return Utils.apiRequest(this.token, 'setStickerKeywords', objParam)
  }

  setStickerMaskPosition(objParam) {
    return Utils.apiRequest(this.token, 'setStickerMaskPosition', objParam)
  }

  setStickerSetTitle(objParam) {
    return Utils.apiRequest(this.token, 'setStickerSetTitle', objParam)
  }

  setStickerSetThumbnail(objParam) {
    return Utils.apiRequest(this.token, "setStickerSetThumbnail", objParam);
  }

  setCustomEmojiStickerSetThumbnail(objParam) {
    return Utils.apiRequest(this.token, 'setCustomEmojiStickerSetThumbnail', objParam)
  }

  deleteStickerSet(objParam) {
    return Utils.apiRequest(this.token, 'deleteStickerSet', objParam)
  }
}
