import { Attendance as TAttendance } from "../api/attendance/Attendance";

export const ATTENDANCE_TITLE_FIELD = "attendanceStatus";

export const AttendanceTitle = (record: TAttendance): string => {
  return record.attendanceStatus || record.id;
};
