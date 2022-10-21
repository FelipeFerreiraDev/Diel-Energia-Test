interface ICreateTaskDTO {
  title: string
  description: string
  date: Date
  runtime: string
  user_id: string
}

interface IUpdateTaskDTO {
  title?: string
  description?: string
  date?: Date
  runtime?: string
}

export { ICreateTaskDTO, IUpdateTaskDTO }
