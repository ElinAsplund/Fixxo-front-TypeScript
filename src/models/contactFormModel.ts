export interface IErrorProps {
    name?: string,
    email?: string,
    comments?: string
}

export interface IError extends IErrorProps{
    error: IErrorProps
}