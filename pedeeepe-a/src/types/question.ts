export interface QuestionInterface {
    id: number
    question: string
    choices: Array<Choice>
}

export interface Choice {
    id: number
    question_id: number
    choice: string
    is_correct: boolean
}