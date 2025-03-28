export enum QuestStatus {
    NEW = 1,
    IN_PROCESS = 2,
    IN_REVIEW = 3,
    DONE = 4
}

export enum QuestType {
    FEATURE = 1,
    BUG = 2
}

export enum QuestActivityType {
    MODIFICATIONS_REQUESTED = 1,
    SOLUTION_APPROVED = 2,
    DESCRIPTION_UPDATED = 3,
    SOLUTION_SUBMITTED = 4,
    STATUS_CHANGED = 5,
    QUEST_CREATED = 6,
    RATING_SUBMITTED = 7
}
