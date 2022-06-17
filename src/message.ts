export type Request = {
    command: string
}

export type Response = {
    failed: boolean
    reason: string | undefined
}