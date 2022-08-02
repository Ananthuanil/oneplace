import { ProjectInvolvement as TProjectInvolvement } from "../api/projectInvolvement/ProjectInvolvement";

export const PROJECTINVOLVEMENT_TITLE_FIELD = "id";

export const ProjectInvolvementTitle = (
  record: TProjectInvolvement
): string => {
  return record.id || record.id;
};
