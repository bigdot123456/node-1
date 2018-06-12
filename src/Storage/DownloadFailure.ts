export enum FailureType {
  Soft = 'SOFT',
  Hard = 'HARD',
}

export enum FailureReason {
  InvalidJson = 'INVALID_JSON',
  InvalidClaim = 'INVALID_CLAIM',
  IPFSGeneric = 'IPFSGeneric',
  IPFSTimeout = 'IPFSTimeout',
}
