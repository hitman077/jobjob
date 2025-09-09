import dayjs from "dayjs"
import buddhistEra from "dayjs/plugin/buddhistEra"
import th from "dayjs/locale/th"

// ตั้งค่า locale และ plugin
dayjs.extend(buddhistEra)
dayjs.locale(th)

// สร้างฟังก์ชันสำหรับแปลงวันที่เป็นภาษาไทย
export const formatThaiDate = (date:any) => {
	if (!date) return ""
	return dayjs(date).format("D MMM BBBB")
	// return dayjs(date).format("วันddddที่ DD MMMM BBBB เวลา H:mm น.")
}

// สร้างฟังก์ชันสำหรับรับปีพุทธศักราช
// export const getThaiBuddhistYear = (date) => {
// 	if (!date) return null
// 	return dayjs(date).buddhistYear()
// }
