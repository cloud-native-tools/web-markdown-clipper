export type Request = {
    command: string
}

export type Response = {
    failed: boolean
    msg?: string,
    data?: string
}