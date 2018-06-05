// tslint:disable:max-classes-per-file

export class NoMoreEntriesException extends Error {
  constructor(message: string) {
    super(message)
  }
}

export class InvalidClaim extends Error {
  readonly ipfsHash: string

  constructor(message: string, ipfsHash: string) {
    super(message)
    this.ipfsHash = ipfsHash
  }
}
