
class FileManager {
  constructor(token) {
    this.token = token
  }

  getOperations() {
    const self = this;
    return {
      getUserProfilePhotos: (objParam) => self.getUserProfilePhotos(objParam),
      getFile: (objParam) => self.getFile(objParam),
    }
  }

  getUserProfilePhotos(objParam) {
    return Utils.apiRequest(this.token, "getUserProfilePhotos", objParam);
  }

  getFile(objParam) {
    return Utils.apiRequest(this.token, "getFile", objParam);
  }
}
