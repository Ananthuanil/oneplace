import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "loginTime";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.loginTime || record.id;
};
