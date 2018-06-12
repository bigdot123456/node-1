// tslint:disable:max-classes-per-file

import { FailureReason } from './DownloadFailure'

export class NoMoreEntriesException extends Error {
  constructor(message: string) {
    super(message)
  }
}

export class InvalidClaim extends Error {
  readonly ipfsHash: string
  readonly failureReason: FailureReason

  constructor(ipfsHash: string, failureReason: FailureReason) {
    super()
    this.ipfsHash = ipfsHash
    this.failureReason = failureReason
  }
}

export class IPFSGenericError extends Error {
  readonly ipfsHash: string
  readonly underlyingError: Error

  constructor(ipfsHash: string, underlyingError: Error) {
    super()
    this.ipfsHash = ipfsHash
    this.underlyingError = underlyingError
  }
}

export class IPFSTimeoutError extends Error {
  readonly ipfsHash: string

  constructor(ipfsHash: string) {
    super()
    this.ipfsHash = ipfsHash
  }
}
