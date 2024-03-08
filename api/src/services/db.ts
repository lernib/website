import { DynamoTable } from '#engine';
import * as tst from '@lernib/ts-types';
import * as z from 'zod';

const StudentTableZ = tst.Db.Students.Item;
type StudentTableType = DynamoTable<
	z.infer<typeof StudentTableZ>,
	'userid',
	string
>;
const StudentTable: StudentTableType = new DynamoTable('LernibData-Students', 'userid');

const CalendarTableZ = tst.Db.Calendar.Item;
type CalendarTableType = DynamoTable<
	z.infer<typeof CalendarTableZ>,
	'eventid',
	string
>;
const CalendarTable: CalendarTableType = new DynamoTable('LernibData-Calendar', 'eventid');

export { StudentTable, CalendarTable };
