
export interface Questions {
    id: string;
    question: string;
    options: Array<{ id: string; option: string }>;
    answer: { id: string, option: string };
    category: string;
}

export interface SelectedAnswer {
    [questionId: string]: string;
}

export interface categoryChart {
    name: string,
    value: number
  }