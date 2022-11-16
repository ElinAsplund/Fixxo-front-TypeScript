export interface IErrorProps {
    name?: string,
    email?: string,
    comments?: string
}

export interface IError extends IErrorProps{
    error: IErrorProps
}

export interface ISetFunctions { 
    setErrorName: (value: React.SetStateAction<{
    name: string;
    }>) => void

    setErrorEmail: (value: React.SetStateAction<{
        email: string;
    }>) => void

    setErrorComments: (value: React.SetStateAction<{
        comments: string;
    }>) => void
}