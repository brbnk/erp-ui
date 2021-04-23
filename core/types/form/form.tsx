export type InputTypes = string | boolean | number | Date

interface Validator {
  rule: (input: InputTypes) => boolean | string
  message: string
}

export type Error = {
  state: boolean,
  messages: string[]
}

interface FormFields {
  group?: string,
  type: 'string' | 'bool' | 'number' | 'date' | 'images',
  label?: string,
  value?: string | number | readonly string[],
  checked?: boolean,
  files?: File[],
  validator?: Validator[]
  error?: Error,
  style?: React.CSSProperties
}

export type Form<T> = Record<keyof T | any, FormFields>