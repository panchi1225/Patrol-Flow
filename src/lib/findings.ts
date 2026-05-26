export const FINDING_TYPES = {
  CORRECTION: '是正指示',
  NOTICE: '注意喚起',
  GOOD_PRACTICE: '好事例',
} as const;

export const FINDING_STATUSES = {
  NOT_STARTED: '未対応',
  IN_PROGRESS: '対応中',
  WAITING_CONFIRMATION: '確認待ち',
  REWORK: '再是正',
  COMPLETED: '完了',
  NOT_APPLICABLE: '対象外',
} as const;

export const ACTIVE_CORRECTION_STATUSES = [
  FINDING_STATUSES.NOT_STARTED,
  FINDING_STATUSES.IN_PROGRESS,
  FINDING_STATUSES.WAITING_CONFIRMATION,
  FINDING_STATUSES.REWORK,
] as const;

export const isCorrectionRequired = (finding: { type?: string | null }) =>
  finding.type === FINDING_TYPES.CORRECTION;
