export const createActionSet = actionName => ({
  REQUESTED: `${actionName}_REQUESTED`,
  CANCEL: `${actionName}_CANCEL`,
  PENDING: `${actionName}_PENDING`,
  SUCCESS: `${actionName}_SUCCESS`,
  ERROR: `${actionName}_ERROR`
});